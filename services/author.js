const Author = require("./../collections/author")
const dateTimeService = require("./../utils/dateTime")

function createModel(name) {
    const newAuthor = new Author({
        name: name,
        cDate: dateTimeService.now(),
        mDate: dateTimeService.now()
    });
    return newAuthor;
}

function insert(newAuthor) {
    return new Promise((resolve, reject) => {
        newAuthor.save(error => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

function removeById(_id) {
    return new Promise((resolve, reject) => {
        Author.deleteOne({ _id: _id }).exec(error => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

function updateById(_id, name) {
    return new Promise((resolve, reject) => {
        Author.updateOne({ _id: _id }, { name: name }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function getById(_id) {
    return new Promise((resolve, reject) => {
        Author.findOne({ _id: _id }).lean().select("_id name cDate mDate").exec((error, athDocument) => {
            if (error) return reject(error);
            return resolve(athDocument);
        })
    });
}

function getManyByName(name) {
    return new Promise((resolve, reject) => {
        Author.find({ name: name }).select("_id name cDate mDate").exec((error, athDocument) => {
            if (error) return reject(error);
            return resolve(athDocument);
        });
    });
}

function getAll() {
    return new Promise((resolve, reject) => {
        Author.find().lean().select("_id name cDate mDate").exec((error, athDocument) => {
            if (error) return reject(error);
            return resolve(athDocument);
        });
    });
}

module.exports = {
    createModel: createModel,
    insert: insert,
    getById: getById,
    getManyByName: getManyByName,
    getAll: getAll,
    removeById: removeById,
    updateById: updateById
}