const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    book_id: {
        type: String,
    },
    user_id: {
        type: String,
    },
    rent_date: {
        type: Date,
    },
    back_date: {
        type: Date,
    },
    location: {
        type: String,
    },
    status: {
        type: Number,
    },
    cDate: {
        type: Date
    },
    mDate: {
        type: Date
    }

});


const Schedule = mongoose.model('schedule', ScheduleSchema, 'schedule');

module.exports = Schedule;