const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const producerSchema = new Schema({
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

const Producer = mongoose.model('producer', producerSchema, 'producer');

module.exports = Producer