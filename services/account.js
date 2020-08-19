const Account = require("./../collections/account");
const dateTimeService = require('./../utils/dateTime');


function createModel(email, password) {
    const newAccount = new Account({
        email: email,
        password: password,
        cDate: dateTimeService.now(),
        mDate: dateTimeService.now()
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
        Account.findOne({username:username}).select("username password").exec((error, accDocument) => {
            if (error) return reject(error);
            return resolve(accDocument);
        })
    });
}

module.exports = {
    createModel: createModel,
    insert: insert,
    updateByEmail: updateByEmail,
    removeByEmail: removeByEmail,
    getByEmail: getByEmail,
    findByUsername:findByUsername,
}