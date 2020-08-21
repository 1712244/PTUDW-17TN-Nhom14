const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user_id: {
        type: String,
        
    },
    book_id: {
        type: String,
        
    },
    content: {
        type: String,
        
    },
    rate: {
        type: Number,
        
    },
    date: {
        type: Date,
        
    },
    cDate: {
        type: Date,
        
    },
    mDate: {
        type: Date
    }
});

const comment = mongoose.model('comments', commentSchema)
module.exports = comment;