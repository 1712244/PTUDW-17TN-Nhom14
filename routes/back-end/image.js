const router = require("express").Router()
const upload = require('./../../utils/upload_middleware');
const imageModule = require('./../../utils/image')


module.exports = () => {
    router.post('image/upload', upload.single('image'), imageModule.downloadImage);
}