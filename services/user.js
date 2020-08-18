const User = require('./../collections/user')
const dateTimeService = require('./../utils/dateTime');



function createModel(user_id, name, email, sdt, type) {
    const userModel = new User({
        user_id: user_id,
        name: name,
        email: email,
        sdt: sdt,
        type: type,
        cDate: dateTimeService.now(),
        mDate: dateTimeService.now()
    });
    return userModel;
}

function insert(newUserDocument) {
    return new Promise((resolve, reject) => {
        newUserDocument.save(error => {
            if (error) return reject(error);
            return resolve(true);
        })
    })
}

function getById(user_id) {
    return new Promise((resolve, reject) => {
        User.findOne({ user_id: user_id }).select("_id user_id name email sdt type cDate mDate").exec((error, UserDocument) => {
            if (error) return reject(error);
            return resolve(UserDocument);
        });
    });
}

function getManyByName(name) {
    return new Promise((resolve, reject) => {
        User.find({ name: name }).select("_id user_id name email sdt type cDate mDate").exec((error, UserDocument) => {
            if (error) return reject(error);
            return resolve(UserDocument);
        });
    });
}

function getAll() {
    return new Promise((resolve, reject) => {
        User.find().select("_id user_id name email sdt type cDate mDate").exec((error, UserDocument) => {
            if (error) return reject(error);
            return resolve(UserDocument);
        });
    });
}

function removeById(user_id) {
    return new Promise((resolve, reject) => {
        User.deleteOne({ user_id: user_id }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function updateById(user_id, name, email, sdt) {
    return new Promise((resolve, reject) => {
        User.updateOne({ user_id: user_id }, { name: name, email: email, sdt: sdt }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
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