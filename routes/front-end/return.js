var express = require('express');
var router = express.Router();

const bd = require("./borrow-data.js")

router.get('/', async function (req, res, next) {
  const rawData = await bd.GetAllBorrowData()
  res.render('return', {layout:"layout-lib", search: true, export: true, returnData: rawData.getUnreturnedData().borrowData});
});

module.exports = router;
