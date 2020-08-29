const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const BuyRegistedSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    book_isbn: {
        type: String,
    },
    book_name: {
        type: String,
        required: true
    },
    reprint: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
    date_registed: {
        type: Date,
        required: true
    },
    discipline: {
        type: String
    },
    status: {
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

const BuyRegisted = mongoose.model('buy_registed', BuyRegistedSchema, 'buyRegisted');

module.exports = BuyRegisted;