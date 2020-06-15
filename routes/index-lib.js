var express = require('express');
var router = express.Router();
const th = require('./helper/time-helper');
const bd = require('./borrow-data');
const rawData = bd.rawData;

const borrowData = rawData.getTodayBorrow();

const returnData =  [{
  id: "ABX",
  bookedBorrowDate: new Date("2020-04-30 12:00"),
  dueDate: new Date("2020-05-30 12:00"),
  borrower : {
    id: "1612864",
    name: "Vuong Hy",
  },
  books: [
    {
      id: "MAS-QWX",
      name: "Lập trình hướng đối tượng",
    },
    {
      id: "DWI-MCX",
      name: "Trí tuệ nhân tạo",
    },
    {
      id: "DWI-MCX",
      name: "Không biết là sách gì luôn",
    }
  ]
}]


const dueData =  [{
  id: "ABX",
  bookedBorrowDate: new Date("2020-04-20 12:00"),
  dueDate: new Date("2020-05-20 12:00"),
  borrower : {
    id: "1612864",
    name: "Vuong Hy",
  },
  books: [
    {
      id: "MAS-QWX",
      name: "Lập trình hướng đối tượng",
    },
    {
      id: "DWI-MCX",
      name: "Trí tuệ nhân tạo",
    },
    {
      id: "DWI-MCX",
      name: "Không biết là sách gì luôn",
    }
  ]
},{
  id: "ABX",
  bookedBorrowDate: new Date("2020-04-10 12:00"),
  dueDate: new Date("2020-05-10 12:00"),
  borrower : {
    id: "1612864",
    name: "Vuong Hy",
  },
  books: [
    {
      id: "MAS-QWX",
      name: "Lập trình hướng đối tượng",
    },
    {
      id: "DWI-MCX",
      name: "Trí tuệ nhân tạo",
    },
    {
      id: "DWI-MCX",
      name: "Không biết là sách gì luôn",
    }
  ]
}];

router.get('/', function (req, res, next) {
  res.render('index-lib', {layout:"layout-lib", borrowData: borrowData.borrowData, returnData: returnData, dueData: dueData});
});

module.exports = router;
