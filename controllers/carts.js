const bookService = require('./../services/book');
const authorService = require("./../services/author");
const commentService = require('./../services/comment');
const accountService = require('./../services/account');
const userService  = require('./../services/user');
const scheduleService  = require('./../services/schedule');
const dateTimeService = require("./../utils/dateTime");

async function getCart(req, res, next) {
    var carts = []
    if (req.session.carts) {
        for (var item of req.session.carts) {
            var cartitem = {
                id: item.book.id,
                thumbnail: item.book.image_url, 
                name: item.book.book_name, 
                author: item.book.author,
                rent_date: item.schedule.rent_date, 
                return_date: item.schedule.back_date,
            }
            carts.push(cartitem)
        }
    }
    res.render('carts', {layout: "layout", carts: carts, sizecart:carts.length });
}

async function abortCart(req, res, next) {
    if (req.session.carts) {
        req.session.carts = []
    }
    res.redirect('/');
}

async function acceptCart(req, res, next) {
    for (var item of req.session.carts) {
        var book = item.book;
        var schedule = item.schedule; 
        await bookService.updateIdBorrower(book._id, schedule.user_id);
        await scheduleService.insertJSON(schedule);
    }
    res.redirect('/rent-book-list');
}

module.exports = {
    getCart: getCart,
    abortCart:abortCart,
    acceptCart:acceptCart,
}