const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const BuyRegistedSchema = new Schema({
    user_id: {
        type: String,
        required: true
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
        type: Array,
        required: true
    },
    producer: {
        type: String,
        type: true
    },
    date_registed: {
        type: Date,
        required: true
    },
    cDate: {
        type: Date
    },
    mDate: {
        type: Date
    }
});

const BuyRegisted = mongoose.model('buy_registed', BuyRegistedSchema);

module.exports = BuyRegisted;