const disciplines = require("./../collections/disciplines")
const dateTimeService = require("./../utils/dateTime")

function createModel(name) {
    const newdisciplines = new disciplines({
        name: name,
        cDate: dateTimeService.now(),
        mDate: dateTimeService.now()
    });
    return newdisciplines;
}

function insert(newdisciplines) {
    return new Promise((resolve, reject) => {
        newdisciplines.save(error => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

function removeById(_id) {
    return new Promise((resolve, reject) => {
        disciplines.deleteOne({ disciplines_id: disciplines_id }).exec(error => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

function updateById(_id, name) {
    return new Promise((resolve, reject) => {
        disciplines.updateOne({ _id: _id }, { name: name }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function getById(_id) {
    return new Promise((resolve, reject) => {
        disciplines.findOne({ _id: _id }).select("_id name cDate mDate").exec((error, prdDocument) => {
            if (error) return reject(error);
            return resolve(prdDocument);
        })
    });
}

function getManyByName(name) {
    return new Promise((resolve, reject) => {
        disciplines.find({ name: { $in: name } }).select("_id name cDate mDate").exec((error, prdDocument) => {
            if (error) return reject(error);
            return resolve(prdDocument);
        });
    });
}


function getAll() {
    return new Promise((resolve, reject) => {
        disciplines.find().select("_id name").exec((error, prdDocument) => {
            if (error) return reject(error);
            return resolve(prdDocument);
        });
    });
}

function getAllName() {
    return new Promise((resolve, reject) => {
        disciplines.find({}, {name:1, _id:0}).select("name").exec((error, prdDocument) => {
            if (error) return reject(error);
            var vals = prdDocument.map(x => x.name)
            return resolve(vals);
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
    updateById: updateById,
    getAllName:getAllName
}