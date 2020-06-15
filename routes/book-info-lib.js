var express = require('express');
var router = express.Router();

const books = {
    "MAS-QWX": {
        id: "MAS-QWX",
        name: "Lập trình hướng đối tượng",
        author: "Nguyễn Văn A",
        publisher: "Abc",
        reprint: "Lần thứ 3",
        pubYear: 2020,
        pages: 201,
        borrowed: 182,
        rating: 4.3,
        remCopies: 2,
        copies: 10,
    },
    "DWI-MCX": {
        id: "DWI-MCX",
        name: "Trí tuệ nhân tạo",
        author: "Noone II",
        publisher: "Xyz",
        reprint: "Lần thứ 7",
        pubYear: 2020,
        pages: 421,
        borrowed: 227,
        rating: 3.8,
        remCopies: 0,
        copies: 12,

    },
};

const borrowData = require("./borrow-data.js").rawData;

router.get('/', function (req, res, next) {
  res.render('book-info-lib', {layout:"layout-lib", export: true, bookData: books[req.query.id], borrowData: borrowData.getBorrowDataByBook(req.query.id).borrowData, activeID: req.query.activeID,});
});

module.exports = router;
