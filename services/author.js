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

function removeById(author_id) {
    return new Promise((resolve, reject) => {
        Author.deleteOne({ author_id: author_id }).exec(error => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

function updateById(author_id, name) {
    return new Promise((resolve, reject) => {
        Author.updateOne({ author_id: author_id }, { name: name }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function getById(author_id) {
    return new Promise((resolve, reject) => {
        Author.findOne({ _id: author_id }).select("author_id name cDate mDate").exec((error, athDocument) => {
            if (error) return reject(error);
            return resolve(athDocument);
        })
    });
}

function getManyByName(name) {
    return new Promise((resolve, reject) => {
        Author.find({ name: name }).select("author_id name cDate mDate").exec((error, athDocument) => {
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
    removeById: removeById,
    updateById: updateById
}