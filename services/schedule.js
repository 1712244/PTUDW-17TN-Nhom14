const Schedule = require("./../collections/schedule")
const dateTimeService = require("./../utils/dateTime");


function createModel(book_id, user_id, book_date, due_date, location, status) {
    const newScheduleDocument = new Schedule({
        book_id: book_id,
        user_id: user_id,
        book_date: book_date,
        recieve_date: book_date,
        due_date: due_date,
        return_date: due_date,
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
        Schedule.findOne({ _id: _id }).select("_id book_id user_id book_date recieve_date due_date return_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function getManyByUserId(user_id) {
    return new Promise((resolve, reject) => {
        Schedule.find({ user_id: user_id }).select("_id book_id user_id book_date recieve_date due_date return_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function getManyByBookId(book_id) {
    return new Promise((resolve, reject) => {
        Schedule.find({ book_id: book_id }).select("_id book_id user_id book_date recieve_date due_date return_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function getManyByRentDate(book_date) {
    return new Promise((resolve, reject) => {
        Schedule.find({ book_date: book_date }).select("_id book_id user_id book_date recieve_date due_date return_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function getManyByDueDate(due_date) {
    return new Promise((resolve, reject) => {
        Schedule.find({ due_date: due_date }).select("_id book_id user_id book_date recieve_date due_date return_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function getManyByLocation(location) {
    return new Promise((resolve, reject) => {
        Schedule.find({ location: location }).select("_id book_id user_id book_date recieve_date due_date return_date location status").exec((error, scheduleDocument) => {
            if (error) return reject(error);
            return resolve(scheduleDocument);
        })
    })
}

function getAll() {
    return new Promise((resolve, reject) => {
        Schedule.find().lean().select("_id book_id user_id book_date recieve_date due_date return_date location status").exec((error, scheduleDocument) => {
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

function updateById(_id, book_id, user_id, book_date, due_date, location, status) {
    return new Promise((resolve, reject) => {
        Schedule.updateOne({ _id: _id }, { book_id: book_id, user_id: user_id, book_date: book_date, due_date: due_date, location: location, status: status }).exec((error) => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

function toDateFromDDMMYYYY(ddmmyyyy){
    var date = new Date(); 
    var strdate = ddmmyyyy.split('/')
    date.setDate(strdate[0])
    date.setMonth(parseInt(strdate[1]) - 1)
    date.setFullYear(strdate[2])
    return date;
}

function insertJSON(newSchedule) {
    newSchedule.book_date = toDateFromDDMMYYYY(newSchedule.book_date)
    newSchedule.due_date = toDateFromDDMMYYYY(newSchedule.due_date)
    const newScheduleModel = new Schedule(newSchedule)
    return new Promise((resolve, reject) => {
        newScheduleModel.save(error => {
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
    getManyByDueDate: getManyByDueDate,
    getManyByLocation: getManyByLocation,
    removeById: removeById,
    updateById: updateById,
    insertJSON:insertJSON,
}