var express = require('express');
var router = express.Router();

var borrowData = [
  {
    id: "ABC",
    bookedBorrowDate: new Date("2020-05-29 11:00"),
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
  },  {
    id: "ABD",
    bookedBorrowDate: new Date("2020-05-29 12:00"),
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
  },  {
    id: "ABX",
    bookedBorrowDate: new Date("2020-05-29 12:00"),
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
  },  {
    id: "ABX",
    bookedBorrowDate: new Date("2020-05-30 12:00"),
    dueDate: new Date("2020-06-30 12:00"),
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
  },
];

router.get('/', function (req, res, next) {
  res.render('borrow', {layout:"layout-lib", search: true, export: true, borrowData: borrowData});
});

module.exports = router;
