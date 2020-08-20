const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: {
        type: String,
    },
    cDate: {
        type: Date
    },
    mDate: {
        type: Date
    }
});

const Author = mongoose.model('author', authorSchema, 'author');

module.exports = Author;