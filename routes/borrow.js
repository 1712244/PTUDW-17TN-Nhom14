var express = require('express');
var router = express.Router();

const borrowData = require("./borrow-data.js")

router.get('/', function (req, res, next) {
  res.render('borrow', {layout:"layout-lib", search: true, export: true, borrowData: borrowData});
});

module.exports = router;
