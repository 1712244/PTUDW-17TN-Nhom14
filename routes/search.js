var express = require('express');
var router = express.Router();

var book_result = [
    { name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", thumbnail:"/images/book-thumbnail.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at." },
    { name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", thumbnail:"/images/book-thumbnail.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at." },
    { name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", thumbnail:"/images/book-thumbnail.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at." },
];
var news_result = [
{title: "Thông báo mở đăng ký mua sách", date:"20/01/2020", thumbnail:"/images/news-thumbnail.png",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at."},
{title: "Thông báo mở đăng ký mua sách", date:"20/01/2020", thumbnail:"/images/news-thumbnail.png",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at."},
{title: "Thông báo mở đăng ký mua sách", date:"20/01/2020", thumbnail:"/images/news-thumbnail.png",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at."},
];


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('search',{book_result:book_result,news_result:news_result});
});

module.exports = router;