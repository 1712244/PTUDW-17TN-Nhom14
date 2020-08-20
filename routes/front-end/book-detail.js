var express = require('express');
var router = express.Router();
const bookDetailControllers = require('./../../controllers/bookDetail');

router.get('/:id', bookDetailControllers.getById);

// router.get('/:id', async function(req, res, next) {
//     var sectionBook = await bookDetailControllers.getById
//     res.render('book-detail', { layout: "layout", sectionBook });
// });

module.exports = router;