const Account = require("./../collections/account");
const dateTimeService = require('./../utils/dateTime');


function createModel(email, password) {
    var id_user = email.split("@")[0]
    var username = id_user
    const newAccount = new Account({
        id_user: id_user,
        username: username,
        email: email,
        password: password
        
    });
    return newAccount;
}

function insert(newAccount) {
    return new Promise((resolve, reject) => {
        newAccount.save(error => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

function updateByEmail(email, password) {
    return new Promise((resolve, reject) => {
        Account.updateOne({ email: email }, { password: password }).exec(error => {
            if (error) return reject(error);
            return resolve(true);
        })
    });
}

function removeByEmail(email) {
    return new Promise((resolve, reject) => {
        Account.deleteOne({ email: email }).exec(error => {
            if (error) return reject(error);
            return resolve(true)
        })
    });
}

function getByEmail(email) {
    return new Promise((resolve, reject) => {
        Account.findOne({ email: email }).select("email password cDate mDate").exec((error, accDocument) => {
            if (error) return reject(error);
            return resolve(accDocument);
        })
    });
}

function findByUsername(username) {
    return new Promise((resolve, reject) => {
        Account.findOne({ username: username }).select("username password").exec((error, accDocument) => {
            if (error) return reject(error);
            return resolve(accDocument);
        })
    });
}
const User = require("./../collections/user");

async function getUserInfo(username) {
    var acc = await Account.findOne({ username: username }).select("id_user username").exec();
    var user = await User.findOne({ id: acc.id_user }).select("id name email sdt avatar qr_code type").exec();
    return {user,username}
}

function findByIdUser(user_id) {
    return  Account.findOne({ id_user: user_id }).select("username").exec();
}

module.exports = {
    createModel: createModel,
    insert: insert,
    updateByEmail: updateByEmail,
    removeByEmail: removeByEmail,
    getByEmail: getByEmail,
    findByUsername: findByUsername,
    getUserInfo: getUserInfo,
    findByIdUser: findByIdUser,
}