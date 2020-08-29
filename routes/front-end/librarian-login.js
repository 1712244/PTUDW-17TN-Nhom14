var express = require('express');
var router = express.Router();
var libloginController = require('./../../controllers/LibLogin')


router.get('/', function (req, res, next) {
  res.render('librarian-login');
});

router.post('/', libloginController.signIn);

module.exports = router;
