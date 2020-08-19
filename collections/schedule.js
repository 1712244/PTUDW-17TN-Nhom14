const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    book_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    rent_date: {
        type: Date,
        required: true
    },
    back_date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
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


const Schedule = mongoose.model('schedule', ScheduleSchema);

module.exports = Schedule;