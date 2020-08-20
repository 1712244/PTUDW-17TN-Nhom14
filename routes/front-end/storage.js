var express = require('express');
var router = express.Router();
var storageController = require('./../../controllers/storage')


/* GET home page. */
router.get('/', storageController.getStorage);




module.exports = router;
