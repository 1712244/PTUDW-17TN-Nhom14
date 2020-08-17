const Book = require('./../collections/book')
const dateTimeService = require('./../utils/dateTime');

function createModel(ISBN, name, author, reprint, producer, desc, tag, borrower_id, image_url) {
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
        cDAte: dateTimeService.now(),
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
        Book.deleteOne({ _id: book_id }).exec(error => {
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

function updateById(_id, ISBN, name, author, reprint, producer, desc, tag, borrower_id, image_url) {
    return new Promise((resolve, reject) => {
        Book.updateOne({ _id: book_id }, { ISBN: ISBN, name: name, author: author, reprint: reprint, producer: producer, desc: desc, tag: tag, borrower_id: borrower_id, image_url: image_url }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function updateByISBN(ISBN, name, author, reprint, producer, desc, tag, borrower_id, image_url) {
    return new Promise((resolve, reject) => {
        Book.updateOne({ ISBN: ISBN }, { name: name, author: author, reprint: reprint, producer: producer, desc: desc, tag: tag, borrower_id: borrower_id, image_url: image_url }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function getById(_id) {
    return new Promise((resolve, reject) => {
        Book.findOne({ _id: book_id }).select("_id book_id ISBN name author reprint producer desc tag borrower_id image_url cDate mDate").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getByISBN(ISBN) {
    return new Promise((resolve, reject) => {
        Book.findOne({ ISBN: ISBN }).select("_id book_id ISBN name author reprint producer desc tag borrower_id image_url cDate mDate").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getManyByName(name) {
    return new Promise((resolve, reject) => {
        Book.find({ name: name }).select("_id book_id ISBN name author reprint producer desc tag borrower_id image_url cDate mDate").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getManyByAuthor(author) {
    return new Promise((resolve, reject) => {
        Book.find({ author: author }).select("_id book_id ISBN name author reprint producer desc tag borrower_id image_url cDate mDate").exec((error, bookDocument) => {
            if (error) return reject(error);
            return resolve(bookDocument);
        });
    });
}

function getManyByProducer(producer) {
    return new Promise((resolve, reject) => {
        Book.find({ producer: producer }).select("_id book_id ISBN name author reprint producer desc tag borrower_id image_url cDate mDate").exec((error, bookDocument) => {
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
    removeById: removeById,
    removeByISBN: removeByISBN,
    updateById: updateById,
    updateByISBN: updateByISBN
}