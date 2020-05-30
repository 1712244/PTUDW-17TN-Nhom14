var express = require('express');
var router = express.Router();

const rent_book_list = [
    {
        thumbnail: "/images/book-thumbnail.png",
        name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng",
        rent_date: "29/2/2020",
        return_date: "29/3/2020"
    }
];

const history_books = [
    {
        thumbnail: "/images/book-thumbnail.png",
        name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng",
    },
    {
        thumbnail: "/images/book-thumbnail.png",
        name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng",
    },
];

router.get('/', function (req, res, next) {
    res.render('rent-book-list', {layout: "layout", rent_book_list: rent_book_list, history_books:history_books });
});




module.exports = router;
