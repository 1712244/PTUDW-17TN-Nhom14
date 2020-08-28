const newsService = require("../services/news");
const bookService = require('./../services/book');
const authorService = require("./../services/author");
const commentService = require('./../services/comment');
const accountService = require('./../services/account');
const userService = require('./../services/user');
const scheduleService = require('./../services/schedule');
const dateTimeService = require("./../utils/dateTime");
const miscUtil = require("./../utils/misc");
const book = require("../collections/book");
const { newsSearch } = require("../services/news");

var book_result = [
    { name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", thumbnail: "/images/book-thumbnail.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at." },
    { name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", thumbnail: "/images/book-thumbnail.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at." },
    { name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", thumbnail: "/images/book-thumbnail.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at." },
];
var news_result = [
    { title: "Thông báo mở đăng ký mua sách", date: "20/01/2020", thumbnail: "/images/news-thumbnail.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at." },
    { title: "Thông báo mở đăng ký mua sách", date: "20/01/2020", thumbnail: "/images/news-thumbnail.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at." },
    { title: "Thông báo mở đăng ký mua sách", date: "20/01/2020", thumbnail: "/images/news-thumbnail.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at." },
];


async function searchDefault(req, res, next) {
    var data ={text:""}
    var books = await bookService.bookSearch(data.text);
    books = await miscUtil.cleanAllBook(books);
    var all_author = await authorService.getAll();
    books.forEach(book => {
        book.author.forEach(function (part, index) {
            all_author.forEach(cau => {
                if (this[index] == cau._id) {
                    this[index] = cau;
                }
            })
        }, book.author);
    })


    var news = await newsService.newsSearch(data.text);
    news.forEach(n => {
        n.date = miscUtil.toStringDDMMYYYY(n.date)
    })
    res.render('search', { layout: "layout", query: data.text, books, news });
}

async function searchQuery(req, res, next) {
    const data = req.params;
    var books = await bookService.bookSearch(data.text);
    books = await miscUtil.cleanAllBook(books);
    var all_author = await authorService.getAll();
    books.forEach(book => {
        book.author.forEach(function (part, index) {
            all_author.forEach(cau => {
                if (this[index] == cau._id) {
                    this[index] = cau;
                }
            })
        }, book.author);
    })


    var news = await newsService.newsSearch(data.text);
    news.forEach(n => {
        n.date = miscUtil.toStringDDMMYYYY(n.date)
    })
    res.render('search', { layout: "layout", query: data.text, books, news });
}

async function postSearch(req, res, next) {
    const data = req.body;
    res.redirect('/search/' + data.searchBar)
}

module.exports = {
    searchDefault,
    searchQuery,
    postSearch
}