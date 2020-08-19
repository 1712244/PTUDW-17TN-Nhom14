const Producer = require("./../collections/producer")
const dateTimeService = require("./../utils/dateTime")

function createModel(name) {
    const newProducer = new Producer({
        name: name,
        cDate: dateTimeService.now(),
        mDate: dateTimeService.now()
    });
    return newProducer;
}

function insert(newProducer) {
    return new Promise((resolve, reject) => {
        newProducer.save(error => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

function removeById(_id) {
    return new Promise((resolve, reject) => {
        Producer.deleteOne({ producer_id: producer_id }).exec(error => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

function updateById(_id, name) {
    return new Promise((resolve, reject) => {
        Producer.updateOne({ _id: _id }, { name: name }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function getById(_id) {
    return new Promise((resolve, reject) => {
        Producer.findOne({ _id: _id }).select("_id name cDate mDate").exec((error, prdDocument) => {
            if (error) return reject(error);
            return resolve(prdDocument);
        })
    });
}

function getManyByName(name) {
    return new Promise((resolve, reject) => {
        Producer.find({ name: { $in: name } }).select("_id name cDate mDate").exec((error, prdDocument) => {
            if (error) return reject(error);
            return resolve(prdDocument);
        });
    });
}


function getAll() {
    return new Promise((resolve, reject) => {
        Producer.find().select("_id name cDate mDate").exec((error, prdDocument) => {
            if (error) return reject(error);
            return resolve(prdDocument);
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