var express = require('express');
var router = express.Router();

const books = {
    "MAS-QWX": {
        id: "MAS-QWX",
        name: "Lập trình hướng đối tượng",
        author: "Noone",
    },
    "DWI-MCX": {
        id: "DWI-MCX",
        name: "Trí tuệ nhân tạo",
        author: "Noone II",
    },
};

const borrowData = require("./borrow-data.js");

function getBorrowData(bookID) {
    var bookData = [];
    borrowData.forEach((borrow) => {
        const temp = borrow.books.filter((book) => book.id == bookID);
        if (temp.length > 0) {
            var borrowCopy = Object.assign({}, borrow)
            borrowCopy.books = temp;
            bookData.push(borrowCopy);
        }
    });
    return bookData;
}

router.get('/', function (req, res, next) {
  res.render('book-info-lib', {layout:"layout-lib", export: true, bookData: books[req.query.id], borrowData: getBorrowData(req.query.id),});
});

module.exports = router;
