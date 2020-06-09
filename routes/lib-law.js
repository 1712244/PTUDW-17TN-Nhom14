var express = require('express');
var router = express.Router();

const curr_law = {late: 20000, max_day: 30, max_book: 2};


router.get('/', function(req, res, next) {
    res.render('lib-law', { layout: "layout-lib", curr_law });
});

module.exports = router;