const bookService = require('./../services/book');
const authorService = require("./../services/author");
const commentService = require('./../services/comment');
const accountService = require('./../services/account');
const userService  = require('./../services/user');
const scheduleService  = require('./../services/schedule');
const dateTimeService = require("./../utils/dateTime");


async function getCart(req, res, next) {
    const data = req.params;
    var book_id = data.id; 
    var book = null
    for (var item of req.session.carts) {
        
        if (item.book.id == book_id) {
            book = item
            break
        }
    }
    var cart_detail = {
        id: book.book.id,
        thumbnail: book.book.image_url,
        name: book.book.book_name, 
        author: book.book.author,
        rent_time: dateTimeService.ToHHMM(new Date(book.schedule.book_date)),
        book_date: dateTimeService.toStringDDMMYYYY(new Date(book.schedule.book_date)),
        due_date: dateTimeService.toStringDDMMYYYY(new Date(book.schedule.due_date)),
        location: book.schedule.location,
    }
    res.render('cart-detail', {layout: "layout", cart_detail: cart_detail });
}

async function postCartDetail(req, res, next) {    
    const data = req.body;
    var book_id = req.params.id; 
    for (var item of req.session.carts) {
        
        if (item.book.id == book_id) {
            item.schedule.book_date = dateTimeService.DateTimetoDate(data.book_date, data.rent_time);
            item.schedule.due_date = dateTimeService.DateTimetoDate(data.due_date,"0:00");
            item.schedule.location = data.location
            break
        }
    }
    res.redirect('/carts');
}

module.exports = {
    getCart: getCart,
    postCartDetail:postCartDetail,
}