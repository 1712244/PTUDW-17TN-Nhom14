const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    ISBN: {
        type: String
    },
    name: {
        type: true,
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
        type: String,
        required: true
    },
    cDate: {
        type: Date,
        required: true
    },
    mDate: {
        type: Date,
        required: true
    }

});

const book = mongoose.model('book', bookSchema);

module.exports = book;