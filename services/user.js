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

function getById(user_id) {
    return new Promise((resolve, reject) => {
        User.findOne({ user_id: user_id }).select("_id user_id name email sdt type avatar qrcode").exec((error, UserDocument) => {
            if (error) return reject(error);
            return resolve(UserDocument);
        });
    });
}

function getManyByName(name) {
    return new Promise((resolve, reject) => {
        User.find({ name: { $in: name } }).select("_id user_id name email sdt type avatar qrcode").exec((error, UserDocument) => {
            if (error) return reject(error);
            return resolve(UserDocument);
        });
    });
}

function getAll() {
    return new Promise((resolve, reject) => {
        User.find().select("_id user_id name email sdt type avatar qrcode ").exec((error, UserDocument) => {
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
        User.updateOne({ user_id: user_id }, { name: name, email: email, sdt: sdt, avatar: avatar, qrcode: qrcode }).exec(error => {
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