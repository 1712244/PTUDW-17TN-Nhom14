const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    cDate: {
        type: Date
    },
    mDate: {
        type: Date
    }
});

const Author = mongoose.model('author', authorSchema);

module.exports = Author