const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    tag: {
        type: Array
    },
    writer: {
        type: Array
    },
    type: {
        type: Number,
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

const News = mongoose.model('new', NewsSchema);

module.exports = News