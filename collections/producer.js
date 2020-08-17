const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const producerSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    cDate: {
        type: Date
    }
});

const Producer = mongoose.model('producer', producerSchema);

module.exports = Producer