const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    book_id: {
        type: String,
        required: true,
        unique: true
    },
    book_score: {
        type: Number,
        default: 0
    },
    book_score_votes: {
        type: Number,
        default: 0
    },
    book_reviews: {
        type: Array,
        default: []
    }
});

BookSchema.static('findOneOrCreate', async function findOneOrCreate(condition, doc) {
    const one = await this.findOne(condition);

    return one || this.create(doc);
})

module.exports = mongoose.model('book', BookSchema);
