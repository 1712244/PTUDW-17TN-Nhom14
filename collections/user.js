const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserShema = new Schema({
    id: {
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
    avatar: {
        type: String
    },
    qr_code: {
        type: String
    }
});

const User = mongoose.model('user', UserShema, 'user');

module.exports = User;