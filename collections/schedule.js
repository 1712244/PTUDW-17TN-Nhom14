const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    book_id: {
        type: String,
    },
    user_id: {
        type: String,
    },
    book_date: {
        type: Date,
    },
    recieve_date: {
        type: Date,
    },
    due_date: {
        type: Date,
    },
    return_date: {
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