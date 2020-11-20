const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const checkRegister = require('../util/checkRegister');

let jwtSecret;
if (process.env.NODE_ENV === 'production') {
  jwtSecret = process.env.JWT_SECRET;
} else {
  jwtSecret = require('../config/config').JWT_SECRET;
}

const User = require('../models/User');

// Get logged in user
// Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

// Log in as user
// Public
router.post('/',
async (req, res) => {
    let errors = [];
    const {email, password} = req.body;

    if (email === '') {
        errors.push("Por favor insira seu email.")
    }
    if(password === '') {
        errors.push("Por favor insira sua senha.")
    }
    if (errors.length > 0) {
        return res.status(400).send(errors);
    }

    try {
        let user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).send(['Email não registrado.']);
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send(['Senha inválida.']);
        }

        const payload = {
            user: {
                id: user._id
            }
        }
        jwt.sign(
            payload,
            jwtSecret,
            {
                expiresIn: 3600
            },
            (err, token) => {
                if (err) throw err;
                res.json({token})
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

// Register an user
// Public
router.post('/register', async (req, res) => {
    const { username, email, password, password2 } = req.body
    let errors = checkRegister(username, email, password, password2);
    if (errors.length > 0) {
        return res.status(400).send(errors);
    }

    try {
        user = new User({
            username,
            email,
            password
        });

        const salt = await bcrypt.genSalt();

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            jwtSecret,
            {
                expiresIn: 3600
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;