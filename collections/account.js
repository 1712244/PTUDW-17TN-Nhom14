const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    id_user: {
        type: String, 
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    }
});

// tham số cuối là tên collection, set cứng vì lên atlas nó tự "số nhiều hóa" (thêm s)
const account = mongoose.model('account', accountSchema, 'account');
module.exports = account;