const User = require('./../collections/user')
const dateTimeService = require('./../utils/dateTime');



function createModel(id, email) {
    const userModel = new User({
        id: id,
        name: "",
        email: email,
        sdt: "",
        type: 2,
        avatar: "",
        qr_code: ""
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

function getById(id) {
    return new Promise((resolve, reject) => {
        User.findOne({ id: id }).lean().select("_id id name email sdt type avatar qr_code").exec((error, UserDocument) => {
            if (error) return reject(error);
            return resolve(UserDocument);
        });
    });
}

function getManyByName(name) {
    return new Promise((resolve, reject) => {
        User.find({ name: { $in: name } }).select("_id id name email sdt type avatar qr_code").exec((error, UserDocument) => {
            if (error) return reject(error);
            return resolve(UserDocument);
        });
    });
}

function getAll() {
    return new Promise((resolve, reject) => {
        User.find().select("_id id name email sdt type avatar qr_code ").exec((error, UserDocument) => {
            if (error) return reject(error);
            return resolve(UserDocument);
        });
    });
}

function removeById(id) {
    return new Promise((resolve, reject) => {
        User.deleteOne({ id: id }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        });
    });
}

function updateById(id, name, email, sdt) {
    return new Promise((resolve, reject) => {
        User.updateOne({ id: id }, { name: name, email: email, sdt: sdt, avatar: avatar, qr_code: qr_code }).exec(error => {
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