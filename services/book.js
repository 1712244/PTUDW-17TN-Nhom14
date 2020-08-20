const Book = require('./../collections/book') 
const dateTimeService = require('./../utils/dateTime');

function createModel(isbn, book_name, author, reprint, producer, desc, tag, borrower_id, image_url, bought_date, price) {
    const bookModel = new Book({
        isbn: isbn,
        book_name: book_name,
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

function removeByisbn(isbn) {
    return new Promise((resolve, reject) => {
        Book.deleteOne({ isbn: isbn }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function updateById(_id, isbn, book_name, author, reprint, producer, desc, tag, borrower_id, image_url, bought_date, price) {
    return new Promise((resolve, reject) => {
        Book.updateOne({ _id: _id }, { isbn: isbn, book_name: book_name, author: author, reprint: reprint, producer: producer, desc: desc, tag: tag, borrower_id: borrower_id, image_url: image_url, bought_date: bought_date, price: price }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function updateByisbn(isbn, book_name, author, reprint, producer, desc, tag, borrower_id, image_url, bought_date, price) {
    return new Promise((resolve, reject) => {
        Book.updateOne({ isbn: isbn }, { book_name: book_name, author: author, reprint: reprint, producer: producer, desc: desc, tag: tag, borrower_id: borrower_id, image_url: image_url, bought_date: bought_date, price: price }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function getById(_id) {
    return new Promise((resolve, reject) => {
        Book.findOne({ _id: _id }).select("_id isbn book_name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getByisbn(isbn) {
    return new Promise((resolve, reject) => {
        Book.findOne({ isbn: isbn }).select("_id isbn book_name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getManyByName(book_name) {
    return new Promise((resolve, reject) => {
        Book.find({ book_name: { $in: book_name } }).select("_id isbn book_name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getManyByAuthor(author) {
    return new Promise((resolve, reject) => {
        Book.find({ author: { $in: author } }).select("_id isbn book_name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getManyByProducer(producer) {
    return new Promise((resolve, reject) => {
        Book.find({ producer: { $in: producer } }).select("_id isbn book_name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getManyByTag(tag) {
    return new Promise((resolve, reject) => {
        Book.find({ tag: { $in: tag } }).select("_id isbn book_name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}


function getAll() {
    return new Promise((resolve, reject) => {
        Book.find().select("_id isbn book_name author reprint producer desc tag borrower_id image_url bought_date price discipline").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getByAttribute(obj) {
    return new Promise((resolve, reject) => {
        Book.find(obj).select("_id isbn book_name author reprint producer desc tag borrower_id image_url bought_date price").exec((error, bookDocument) => {
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
    getByisbn: getByisbn,
    getAll: getAll,
    getByAttribute: getByAttribute,
    removeById: removeById,
    removeByisbn: removeByisbn,
    updateById: updateById,
    updateByisbn: updateByisbn,
    getManyByTag: getManyByTag
}