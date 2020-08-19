const Book = require('./../collections/book')
const dateTimeService = require('./../utils/dateTime');

function createModel(ISBN, name, author, reprint, producer, desc, tag, borrower_id, image_url, bought_date, price) {
    const bookModel = new Book({
        ISBN: ISBN,
        name: name,
        author: author,
        reprint: reprint,
        producer: producer,
        desc: desc,
        tag: tag,
        borrower_id: borrower_id,
        image_url: image_url,
        bought_date: dateTimeService.stringToDate(bought_date),
        price: price,
        cDate: dateTimeService.now(),
        mDate: dateTimeService.now()
    });
    return bookModel;
}

function insert(newBookDocument) {
    return new Promise((resolve, reject) => {
        newBookDocument.save(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function removeById(_id) {
    return new Promise((resolve, reject) => {
        Book.deleteOne({ _id: _id }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function removeByISBN(ISBN) {
    return new Promise((resolve, reject) => {
        Book.deleteOne({ ISBN: ISBN }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function updateById(_id, ISBN, name, author, reprint, producer, desc, tag, borrower_id, image_url, bought_date, price) {
    return new Promise((resolve, reject) => {
        Book.updateOne({ _id: _id }, { ISBN: ISBN, name: name, author: author, reprint: reprint, producer: producer, desc: desc, tag: tag, borrower_id: borrower_id, image_url: image_url, bought_date: bought_date, price: price }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function updateByISBN(ISBN, name, author, reprint, producer, desc, tag, borrower_id, image_url, bought_date, price) {
    return new Promise((resolve, reject) => {
        Book.updateOne({ ISBN: ISBN }, { name: name, author: author, reprint: reprint, producer: producer, desc: desc, tag: tag, borrower_id: borrower_id, image_url: image_url, bought_date: bought_date, price: price }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function getById(_id) {
    return new Promise((resolve, reject) => {
        Book.findOne({ _id: _id }).select("_id ISBN name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getByISBN(ISBN) {
    return new Promise((resolve, reject) => {
        Book.findOne({ ISBN: ISBN }).select("_id ISBN name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getManyByName(name) {
    return new Promise((resolve, reject) => {
        Book.find({ name: { $in: name } }).select("_id ISBN name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getManyByAuthor(author) {
    return new Promise((resolve, reject) => {
        Book.find({ author: { $in: author } }).select("_id ISBN name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getManyByProducer(producer) {
    return new Promise((resolve, reject) => {
        Book.find({ producer: { $in: producer } }).select("_id ISBN name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getManyByTag(tag) {
    return new Promise((resolve, reject) => {
        Book.find({ tag: { $in: tag } }).select("_id ISBN name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}


function getAll() {
    return new Promise((resolve, reject) => {
        Book.find().select("_id ISBN name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getByAttribute(obj) {
    return new Promise((resolve, reject) => {
        Book.find(obj).select("_id ISBN name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}


module.exports = {
    createModel: createModel,
    insert: insert,
    getManyByName: getManyByName,
    getManyByAuthor: getManyByAuthor,
    getManyByProducer: getManyByProducer,
    getById: getById,
    getByISBN: getByISBN,
    getAll: getAll,
    getByAttribute: getByAttribute,
    removeById: removeById,
    removeByISBN: removeByISBN,
    updateById: updateById,
    updateByISBN: updateByISBN,
    getManyByTag: getManyByTag
}