const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const disciplinesSchema = new Schema({
    name: {
        type: String,
    },
    cDate: {
        type: Date
    }
});

const disciplines = mongoose.model('disciplines', disciplinesSchema);

module.exports = disciplines