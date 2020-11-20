const express = require('express');
const router = express.Router();
const axios = require('axios');
const dataParser = require('../util/dataParser');

let GOODREADS_KEY;
if (process.env.NODE_ENV === 'production') {
    GOODREADS_KEY = process.env.GOODREADS_KEY;
} else {
    GOODREADS_KEY = require('../config/config').GOODREADS_KEY;
}

// Get book
// Public
router.get('/:book_id', async (req, res) => {
    try {
        const xmlString = await axios.get(`https://www.goodreads.com/book/show.xml?key=${GOODREADS_KEY}&id=${req.params.book_id}`);
        const parsedData = dataParser(xmlString.data)
        const book_info = {
            ...parsedData[0],
            img: `https://covers.openlibrary.org/b/ISBN/${parsedData[1]}.jpg`
        }
        res.send(book_info)
    } catch (err) {
        console.error(err.message); // Criar página de erro 404 livro não encontrado
        res.status(404).send("Not Found");
    }
})

module.exports = router;