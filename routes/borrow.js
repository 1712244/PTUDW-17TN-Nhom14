var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('borrow', {layout:"layout-lib", search: true, export: true});
});

module.exports = router;
