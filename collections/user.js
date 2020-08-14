const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserShema = new Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sdt: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    cDate: {
        type: Date
    },
    mDate: {
        type: Date
    }
});

const User = mongoose.model('user', UserShema);

module.exports = User;