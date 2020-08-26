var express = require('express');
var router = express.Router();

const bd = require("./borrow-data.js")

router.get('/', async function (req, res, next) {
  const rawData = await bd.GetAllBorrowData()
  res.render('borrow', {layout:"layout-lib", search: true, export: true, borrowData: rawData.borrowData});
});

module.exports = router;
