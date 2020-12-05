const express = require('express');
const router = express.Router();
const axios = require('axios');
const auth = require('../middleware/auth');
const dataParser = require('../util/dataParser');
const xmlParser = require('xml-js');


let GOODREADS_KEY;
if (process.env.NODE_ENV === 'production') {
    GOODREADS_KEY = process.env.GOODREADS_KEY;
} else {
    GOODREADS_KEY = require('../config/config').GOODREADS_KEY;
}

const Book = require('../models/Book');
const User = require('../models/User');

// Get books
// Public
router.post('/', async (req, res) => {
    try {
        const xmlString = await axios.get(`https://www.goodreads.com/search/index.xml?key=${GOODREADS_KEY}&q=${req.body.field}&search[title]`);
        let data = xmlParser.xml2js(xmlString.data, {compact: true, spaces: 4}).GoodreadsResponse.search.results.work;
        let book_list = []
        for (i=0;i<data.length;i++) {
            book_list.push({id: data[i].best_book.id._text, title: data[i].best_book.title._text, img: data[i].best_book.image_url._text.replace('._SX98_', '')});
        } 
        res.send(book_list)
    } catch (err) {
        console.error(err.message);
        res.status(404).send("Not Found");
    }
})

// Get book
// Public
router.get('/:book_id', async (req, res) => {
    const modelBook = new Book({ book_id: req.params.book_id})
    try {
        const xmlString = await axios.get(`https://www.goodreads.com/book/show.xml?key=${GOODREADS_KEY}&id=${req.params.book_id}`);
        const parsedData = dataParser(xmlString.data)
        const book_data = await Book.findOneOrCreate({book_id: req.params.book_id}, modelBook)
        let reviews;
        let book_score;
        if (book_data) {
            reviews = book_data.book_reviews;
            book_score = book_data.book_score;
        }
        const book_info = {
            ...parsedData[0],
            img: parsedData[1],
            book_reviews: reviews,
            book_score
        }
        res.send(book_info)
    } catch (err) {
        console.error(err.message);
        res.status(404).send("Not Found");
    }
})

// Post review
// Private
router.post('/review/:book_id', auth, async(req, res) => {
    const modelBook = new Book({ book_id: req.params.book_id})
    try {
        let errors = [];
        const {user_name, score, text, date} = req.body;

        if (user_name === '') {
            errors.push("Server error.")
        }
        if(!score) {
            errors.push("Por favor insira o score.")
        }
        if(text === '') {
            errors.push("Por favor insira sua review.")
        }
        if(!date) {
            errors.push("Server Error.")
        }
        if (errors.length > 0) {
            return res.status(400).send(errors);
        }

        const book = await Book.findOneOrCreate({book_id: req.params.book_id}, modelBook);
        book.book_reviews.push(req.body);
        await book.save();
        res.send("Posted")
    } catch (err) {
        console.error(err.message);
        res.status(400).send("Server Error");
    }
})

// Update score
// Private
router.put('/:book_id', auth, async (req, res) => {
    const modelBook = new Book({ book_id: req.params.book_id});
    try {
        if (!req.body.score || !req.body.user_id || !req.body.book_info) {
            return res.status(400).send("Server Error")
        }

        const book = await Book.findOneOrCreate({book_id: req.params.book_id}, modelBook);
        const user = await User.findById(req.body.user_id);
        book.book_score = {...book.book_score, [req.body.user_id]: req.body.score};
        const book_info = {
            book_id: req.params.book_id,
            title: req.body.book_info.title,
            img: req.body.book_info.img,
            score: req.body.score
        }
        user.books.push(book_info);
        await book.save();
        await user.save();
        res.send("Updated");
    } catch (err) {
        console.error(err.message);
        console.log(err)
        res.status(400).send("Server Error");
    }
})

// Delete book entry
// Private
router.put('/', auth, async (req, res) => {
    try {
        if (!req.body.book || !req.body.user_id) {
            return res.status(400).send("Server Error")
        }

        const book = await Book.findOne({book_id: req.body.book.book_id});
        const user = await User.findById(req.body.user_id);
        for (i=0;i<user.books.length;i++) {
            if (user.books[i].book_id === req.body.book.book_id) {
                user.books.splice(i, 1);
                break;
            }
        }
        delete book.book_score[req.body.user_id];
        book.markModified('book_score');
        await book.save();
        await user.save();
        res.send("Updated");
    } catch (err) {
        console.error(err.message);
        console.log(err)
        res.status(400).send("Server Error");
    }
})

module.exports = router;