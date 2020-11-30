const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    book_id: {
        type: String,
        required: true,
        unique: true
    },
    book_score: {
        type: Object,
        default: {}
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
