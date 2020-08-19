const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserShema = new Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    sdt: {
        type: String,
    },
    type: {
        type: Number,
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