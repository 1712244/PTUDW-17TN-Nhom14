var express = require('express');
var router = express.Router();
require('./helper/time-helper');
const bd = require('./borrow-data');
const scheduleService = require('./../../services/schedule');




router.get('/', async function (req, res, next) {
  // check account type and login
  if (req.session.username) {
    if (res.locals.user.user.type != 3) {
      req.session.destroy((err) => {
        if (err) {
          return console.log(err);
        }
        res.locals.user = null
        res.redirect('/librarian/librarian-login')
        return
      });
    }
  }
  else {
    req.session.destroy((err) => {
      if (err) {
        return console.log(err);
      }
      res.locals.user = null
      res.redirect('/librarian/librarian-login')
      return
    });
  }

  const rawData = await bd.GetAllBorrowData();
  const borrowData = rawData.getTodayBorrow().borrowData;
  const allReturnData = rawData.getUnreturnedData();

  now = new Date();
  const statistic = rawData.getBorrowInDateRange(now.addDays(-30), now).getStatistic();
  console.log(statistic);

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

  console.log(JSON.stringify(statistic));
  res.render('lib-index', { layout: "layout-lib", borrowData: borrowData, returnData: returnData, dueData: dueData , chartData: statistic});
});

module.exports = router;
