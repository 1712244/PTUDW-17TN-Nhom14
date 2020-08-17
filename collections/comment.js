const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    user_id: {
        type: String,
        required: true
    },
    book_ISBN: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    cDate: {
        type: Date,
        required: true
    },
    mDate: {
        type: Date
    }
});

const comment = mongoose.model('comments', commentSchema)
module.exports = comment;