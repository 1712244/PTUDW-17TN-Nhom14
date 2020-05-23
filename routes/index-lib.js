var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index-lib', {layout:"layout-lib", title: "huhu"});
});

module.exports = router;
