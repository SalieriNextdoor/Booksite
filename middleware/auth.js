const jwt = require('jsonwebtoken');

let jwtSecret;
if (process.env.NODE_ENV === 'production') {
  jwtSecret = process.env.JWT_SECRET;
} else {
  jwtSecret = require('../config/config').JWT_SECRET;
}

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is invalid' });
  }
};
