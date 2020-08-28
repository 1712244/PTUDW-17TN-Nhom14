var express = require('express');
var router = express.Router();
var bookService = require('../../services/book');
var authorService = require('../../services/author');
var publisherService = require('../../services/producer');

const bd = require("./borrow-data.js");

router.get('/', async function (req, res, next) {
    const rawData = await bd.GetAllBorrowData()
    const rawBook = await bookService.getByBookId(req.query.id)

    authors = []
    for(const a of rawBook.author) {
        authors.push((await authorService.getById(a)).name)
    }

    publisher = await publisherService.getById(rawBook.producer);
    if (publisher)
        publisher = publisher.name

    const book = {
        id: rawBook.id,
        name: rawBook.book_name,
        image_url: rawBook.image_url,
        isbn: rawBook.isbn,
        author: authors,
        publisher: publisher,
        reprint: rawBook.reprint,
        description: rawBook.desc,
    }
    res.render('book-info-lib', {layout:"layout-lib", export: true, bookData: book, borrowData: rawData.getBorrowDataByBook(req.query.id).borrowData, activeID: req.query.activeID,});
});

module.exports = router;
