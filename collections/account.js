const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
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

const account = mongoose.model('account', accountSchema);

module.exports = account;