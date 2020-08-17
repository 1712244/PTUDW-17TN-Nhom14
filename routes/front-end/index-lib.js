var express = require('express');
var router = express.Router();
const th = require('./helper/time-helper');
const bd = require('./borrow-data');
const rawData = bd.rawData;


router.get('/', function (req, res, next) {
  const borrowData = rawData.getTodayBorrow().borrowData;
  const allReturnData = rawData.getUnreturnedData();
  allReturnData.sortByDueDate();
  var returnData = [];
  var dueData = [];
  const today = new Date();
  allReturnData.borrowData.forEach(borrow => {
    if (borrow.returnDueDate <= today) {
      dueData.push(borrow);
    } else {
      returnData.push(borrow);
    }
  });

  res.render('index-lib', {layout:"layout-lib", borrowData: borrowData, returnData: returnData, dueData: dueData});
});

module.exports = router;
