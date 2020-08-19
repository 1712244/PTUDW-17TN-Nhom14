const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: Array
    },
    reprint: {
        type: Number,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    tag: {
        type: Array,
        required: true
    },
    borrower_id: {
        type: String
    },
    image_url: {
        type: String
    },
    bought_date: {
        type: Date,
        required: true
    },
    price: {
        type: Number
    },
    cDate: {
        type: Date
    },
    mDate: {
        type: Date
    }

});

const book = mongoose.model('book', bookSchema);

module.exports = book;