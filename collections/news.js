const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tag: {
        type: Array
    },
    writer: {
        type: Array
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