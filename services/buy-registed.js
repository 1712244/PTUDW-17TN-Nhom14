const dateTimeService = require("./../utils/dateTime");
const BuyRegisted = require("./../collections/buy-registed");
const { mode } = require("crypto-js");

function createModel(user_id, book_isbn, book_name, reprint, author, producer, date_registed, discipline) {
    const newBuyRegistedModel = new buyRegisted({
        user_id: user_id,
        book_isbn: book_isbn,
        book_name: book_name,
        reprint: reprint,
        author: author,
        producer: producer,
        date_registed: dateTimeService.stringToDate(date_registed),
        discipline: discipline,
        cDate: dateTimeService.now(),
        mDate: dateTimeService.new()
    });
    return newBuyRegistedModel;
}

function insert(newBuyRegistedModel) {
    return new Promise((resolve, reject) => {
        newBuyRegistedModel.save((error) => {
            if (error) return reject(error);
            return resolve(true)
        });
    });
}

function getById(_id) {
    return new Promise((resolve, reject) => {
        BuyRegisted.findOne({ _id: _id }).select("_id user_id book_isbn book_name reprint author producer date_registed discipline").exec((error, buyRegistedDocument) => {
            if (error) return reject(error);
            return resolve(buyRegistedDocument);
        });
    });
}

function getAll() {
    return new Promise((resolve, reject) => {
        BuyRegisted.find().select().limit().exec((error, buyRegistedDocument) => {
            if (error) return reject(error);
            return resolve(buyRegistedDocument);
        });
    });
}

function getByStatus(status) {
    return new Promise((resolve, reject) => {
        BuyRegisted.find({ status: status }).limit(20).exec((error, buyRegistedDocument) => {
            if (error) return reject(error);
            return resolve(buyRegistedDocument);
        });
    });
}

function getManyByRegistDate(date_registed) {

    BuyRegisted.find({ date_registed: date_registed }).select("_id user_id book_isbn book_name reprint author producer date_registed discipline").exec((error, buyRegistedDocument) => {
        if (error) return reject(error);
        return resolve(buyRegistedDocument);

    });
}

function getManyByUserId(user_id) {
    return new Promise((resolve, reject) => {
        BuyRegisted.find({ user_id: user_id }).exec((error, buyRegistedDocument) => {
            if (error) return reject(error);
            return resolve(buyRegistedDocument);
        });
    });
}

function getManyByBookName(BookName) {
    return new Promise((resolve, reject) => {
        BuyRegisted.find({ BookName: BookName }).select("_id user_id book_isbn book_name reprint author producer date_registed discipline").exec((error, buyRegistedDocument) => {
            if (error) return reject(error);
            return resolve(buyRegistedDocument);
        });
    });
}

function getManyByProducer(producer) {
    return new Promise((resolve, reject) => {
        BuyRegisted.find({ producer: producer }).select("_id user_id book_isbn book_name reprint author producer date_registed discipline").exec((error, buyRegistedDocument) => {
            if (error) return reject(error);
            return resolve(buyRegistedDocument);
        });
    });
}

function removeById(_id) {
    return new Promise((resolve, reject) => {
        BuyRegisted.deleteOne({ _id: _id }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function updateById(_id, user_id, book_isbn, book_name, reprint, author, producer, date_registed, discipline) {
    return new Promise((resolve, reject) => {
        BuyRegisted.updateOne({ _id: _id }, { user_id: user_id, book_isbn: book_isbn, book_name: book_name, reprint: reprint, author: author, producer: producer, date_registed: dateTimeService.stringToDate(date_registed), discipline: discipline }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

module.exports = {
    createModel: createModel,
    insert: insert,
    getById: getById,
    getManyByProducer: getManyByProducer,
    getManyByBookName: getManyByBookName,
    getManyByUserId: getManyByUserId,
    getManyByRegistDate: getManyByRegistDate,
    getAll: getAll,
    removeById: removeById,
    updateById: updateById,
    getByStatus: getByStatus
}