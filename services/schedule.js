const Schedule = require("./../collections/schedule")
const dateTimeService = require("./../utils/dateTime");


function createModel(book_id, user_id, rent_date, back_date, location, status) {
    const newScheduleDocument = new Schedule({
        book_id: book_id,
        user_id: user_id,
        rent_date: rent_date,
        back_date: back_date,
        location: location,
        status: status,
        cDate: dateTimeService.now(),
        mDate: dateTimeService.now()
    });
    return newScheduleDocument;
}

function insert(newScheduleModel) {
    return new Promise((resolve, reject) => {
        newScheduleModel.save(error => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

function getById(_id) {
    return new Promise((resolve, reject) => {
        Schedule.findOne({ _id: _id }).select("_id book_id user_id rent_date back_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function getManyByUserId(user_id) {
    return new Promise((resolve, reject) => {
        Schedule.find({ user_id: user_id }).select("_id book_id user_id rent_date back_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function getManyByBookId(book_id) {
    return new Promise((resolve, reject) => {
        Schedule.find({ book_id: book_id }).select("_id book_id user_id rent_date back_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function getManyByRentDate(rent_date) {
    return new Promise((resolve, reject) => {
        Schedule.find({ rent_date: rent_date }).select("_id book_id user_id rent_date back_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function getManyByBackDate(back_date) {
    return new Promise((resolve, reject) => {
        Schedule.find({ back_date: back_date }).select("_id book_id user_id rent_date back_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function getManyByLocation(location) {
    return new Promise((resolve, reject) => {
        Schedule.find({ location: location }).select("_id book_id user_id rent_date back_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function getAll() {
    return new Promise((resolve, reject) => {
        Schedule.find().select("_id book_id user_id rent_date back_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function removeById(_id) {
    return new Promise((resolve, reject) => {
        Schedule.deleteOne({ _id: _id }).exec((error) => {
            if (error) return reject(error);
            return resolve(true);
        })
    });
}

function updateById(_id, book_id, user_id, rent_date, back_date, location, status) {
    return new Promise((resolve, reject) => {
        Schedule.updateOne({ _id: _id }, { book_id: book_id, user_id: user_id, rent_date: rent_date, back_date: back_date, location: location, status: status }).exec((error) => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

module.exports = {
    createModel: createModel,
    insert: insert,
    getAll: getAll,
    getById: getById,
    getManyByBookId: getManyByBookId,
    getManyByUserId: getManyByUserId,
    getManyByRentDate: getManyByRentDate,
    getManyByBackDate: getManyByBackDate,
    getManyByLocation: getManyByLocation,
    removeById: removeById,
    updateById: updateById
}