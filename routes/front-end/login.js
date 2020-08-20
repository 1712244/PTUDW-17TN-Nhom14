var express = require('express');
var router = express.Router();
const accountController = require('./../../controllers/account');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login', {layout:"layout"});
});

// router.post('/', accountController.signIn);

module.exports = router;