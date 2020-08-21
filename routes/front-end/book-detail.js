var express = require('express');
var router = express.Router();
const bookDetailControllers = require('./../../controllers/bookDetail');

router.get('/:id', bookDetailControllers.getById);

router.post('/:id', bookDetailControllers.postBorrowId);


module.exports = router;