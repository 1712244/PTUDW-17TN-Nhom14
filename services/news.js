const News = require("./../collections/news");
const dateTimeService = require('./../utils/dateTime');

function createModel(title, desc, tag, writer, type) {
    const newNewsModel = new News({
        title: title,
        desc: desc,
        tag: tag,
        type: type,
        writer: writer,
        cDate: dateTimeService.now(),
        mDate: dateTimeService.now()
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
        News.findOne({ _id: _id }).select("_id title desc date image_url type").exec((error, newsDocument) => {
            if (error) return reject(error);
            return resolve(newsDocument);
        });
    });
}

function getAll() {
    return new Promise((resolve, reject) => {
        News.find().exec((error, newsDocument) => {
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


function updateById(_id, title, desc, tag, writer) {
    return new Promise((resolve, reject) => {
        News.updateOne({ _id: _id }, { title: title, desc: desc, tag: tag, writer: writer, type: type }).exec((error) => {
            if (error) return reject(error);
            return resolve(true);
        })
    });
}

function get3EventByLatestDate() {
    return new Promise((resolve, reject) => {
        News.find({ type: 1 }).sort({ "date": -1 }).limit(2).exec((error, newsDocument) => {
            if (error) return reject(error);
            return resolve(newsDocument);
        });
    })
}

function get3PronouncerByLatestDate() {
    return new Promise((resolve, reject) => {
        News.find({ type: 0 }).sort({ "date": -1 }).limit(2).exec((error, newsDocument) => {
            if (error) return reject(error);
            return resolve(newsDocument);
        });
    })
}

function get5NewsByLatestDate() {
    return new Promise((resolve, reject) => {
        News.find().sort({ "date": -1 }).limit(2).exec((error, newsDocument) => {
            if (error) return reject(error);
            return resolve(newsDocument);
        });
    })
}

module.exports = {
    createModel: createModel,
    insert: insert,
    getById: getById,
    getAll: getAll,
    get3EventByLatestDate: get3EventByLatestDate,
    get3PronouncerByLatestDate: get3PronouncerByLatestDate,
    get5NewsByLatestDate: get5NewsByLatestDate,
    removeById: removeById,
    updateById: updateById
}