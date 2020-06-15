var express = require('express');
var router = express.Router();

const bd = require("./borrow-data.js")

router.get('/', function (req, res, next) {
  res.render('borrow', {layout:"layout-lib", search: true, export: true, borrowData: bd.rawData.borrowData});
});

module.exports = router;
