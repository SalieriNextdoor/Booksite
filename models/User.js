const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    books: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('user', UserSchema);
