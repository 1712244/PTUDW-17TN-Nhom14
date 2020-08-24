var express = require('express');
var router = express.Router();
const rblController = require('./../../controllers/returnBookList')

const return_book_list = [
    {
        thumbnail: "/images/book-thumbnail.png",
        name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng",
        book_date: "29/1/2020",
        due_date: "29/2/2020"
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

router.get('/', rblController.getReturnBookList);




module.exports = router;
