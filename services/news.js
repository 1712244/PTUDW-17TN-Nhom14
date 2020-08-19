const News = require("./../collections/news");
const dateTimeService = require('./../utils/dateTime');

function createModel(title, content, tag, writer, type) {
    const newNewsModel = new News({
        title: title,
        content: content,
        tag: tag,
        type: type,
        writer: writer,
        cDate: dateTimeService.now(),
        mDate: dateTimeService.new()
    });
    return newNewsModel;
}

function insert(newNews) {
    return new Promise((resolve, reject) => {
        newNews.save(error => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

function getById(_id) {
    return new Promise((resolve, reject) => {
        News.findOne({ _id: _id }).select("_id title content tag writer type cDate mDate").exec((error, newsDocument) => {
            if (error) return reject(error);
            return resolve(newsDocument);
        });
    });
}

function getAll() {
    return new Promise((resolve, reject) => {
        News.find().select("_id title content tag writer type cDate mDate").exec((error, newsDocument) => {
            if (error) return reject(error);
            return resolve(newsDocument);
        });
    });
}

function removeById(_id) {
    return new Promise((resolve, reject) => {
        News.deleteOne({ _id: _id }).exec((error) => {
            if (error) return reject(error);
            return resolve(true)
        });
    });
}


function updateById(_id, title, content, tag, writer) {
    return new Promise((resolve, reject) => {
        News.updateOne({ _id: _id }, { title: title, content: content, tag: tag, writer: writer, type: type }).exec((error) => {
            if (error) return reject(error);
            return resolve(true);
        })
    });
}

module.exports = {
    createModel: createModel,
    insert: insert,
    getById: getById,
    getAll: getAll,
    removeById: removeById,
    updateById: updateById
}