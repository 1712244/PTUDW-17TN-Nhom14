var express = require('express');
var router = express.Router();

const bd = require("./borrow-data.js")

router.get('/', function (req, res, next) {
  res.render('return', {layout:"layout-lib", search: true, export: true, returnData: bd.rawData.getUnreturnedData().borrowData});
});

module.exports = router;
