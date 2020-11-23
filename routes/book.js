const express = require('express');
const router = express.Router();
const axios = require('axios');
const auth = require('../middleware/auth');
const dataParser = require('../util/dataParser');

let GOODREADS_KEY;
if (process.env.NODE_ENV === 'production') {
    GOODREADS_KEY = process.env.GOODREADS_KEY;
} else {
    GOODREADS_KEY = require('../config/config').GOODREADS_KEY;
}

const Book = require('../models/Book');

// Get book
// Public
router.get('/:book_id', async (req, res) => {
    try {
        const xmlString = await axios.get(`https://www.goodreads.com/book/show.xml?key=${GOODREADS_KEY}&id=${req.params.book_id}`);
        const parsedData = dataParser(xmlString.data)
        const book_data = await Book.findOne({book_id: req.params.book_id})
        let reviews;
        if (book_data) {
            reviews = book_data.book_reviews;
        }
        const book_info = {
            ...parsedData[0],
            img: `https://covers.openlibrary.org/b/ISBN/${parsedData[1]}.jpg`,
            book_reviews: reviews
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
        // Efetuar check de dados, como feito no auth.js.

        const book = await Book.findOneOrCreate({book_id: req.params.book_id}, modelBook);
        book.book_reviews.push(req.body);
        await book.save();
        res.send("Posted")
    } catch (err) {
        console.error(err.message);
        res.status(400).send("Server Error");
    }
})

module.exports = router;