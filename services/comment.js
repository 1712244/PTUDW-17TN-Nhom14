const Comment = require("./../collections/comment")
const dateTimeService = require("./../utils/dateTime")

function createModel(user_id, book_id, content, rate) {
    const newCommentDocument = new Comment({
        user_id: user_id,
        book_id: book_id,
        content: content,
        rate: rate,
        cDAte: dateTimeService.now(),
        mDate: dateTimeService.now()
    });
    return newCommentDocument
}

function insert(newCommentDocument) {
    return new Promise((resolve, reject) => {
        newCommentDocument.save(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function removeById(_id) {
    return new Promise((resolve, reject) => {
        Comment.deleteOne({ _id: _id }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function updateById(_id, content, rate) {
    return new Promise((resolve, reject) => {
        Comment.updateOne({ _id: _id }, { content: content, rate: rate }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function getById(_id) {
    return new Promise((resolve, reject) => {
        Comment.findOne({ _id: _id }).select("_id user_id book_id content rate date cDate mDate").exec((error, cmtDocument) => {
            if (error) return reject(error);
            return resolve(cmtDocument);
        });
    });
}

function getAll() {
    return new Promise((resolve, reject) => {
        Comment.find().lean().select("_id user_id book_id content rate date cDate mDate").exec((error, cmtDocument) => {
            if (error) return reject(error);
            return resolve(cmtDocument);
        });
    });
}

function getByAttribute(obj) {
    return new Promise((resolve, reject) => {
        Comment.find(obj).select("_id user_id book_id content rate date cDate mDate").exec((error, cmtDocument) => {
            if (error) return reject(error);
            return resolve(cmtDocument);
        });
    });
}

module.exports = {
    createModel: createModel,
    insert: insert,
    getById: getById,
    updateById: updateById,
    removeById: removeById,
    getAll: getAll,
    getByAttribute: getByAttribute
}