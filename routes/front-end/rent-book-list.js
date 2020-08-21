var express = require('express');
var router = express.Router();
const rblController = require('./../../controllers/rentBookList')



router.get('/', rblController.getRentBookList);




module.exports = router;
