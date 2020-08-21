const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    isbn: {
        type: String,
    },
    book_name: {
        type: String,
        
    },
    author: {
        type: Array
    },
    reprint: {
        type: Number,
        
    },
    producer: {
        type: String,
        
    },
    desc: {
        type: String
    },
    tag: {
        type: Array,
        
    },
    id_borrower: {
        type: String
    },
    discipline: {
        type: String
    },
    image_url: {
        type: String
    },
    bought_date: {
        type: Date,
        
    },
    cDate: {
        type: Date
    },
    mDate: {
        type: Date
    }

});

const book = mongoose.model('book', bookSchema, 'book');

module.exports = book;