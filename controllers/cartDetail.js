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
        rent_time:"17:00",
        rent_date: book.schedule.rent_date,
        return_date: book.schedule.back_date,
        location: book.schedule.location,
    }
    res.render('cart-detail', {layout: "layout", cart_detail: cart_detail });
}

async function postCartDetail(req, res, next) {    
    const data = req.body;
    var book_id = req.params.id; 
    // req.session.carts.forEach(item => {
    //     if (item.book.id == book_id) {
    //         item.schedule.rent_date = data.rent_date
    //         item.schedule.rent_time = data.rent_time
    //         item.schedule.back_date = data.return_date
    //         item.schedule.location = data.location
    //     }
    // })  
    console.log(data) 
    for (var item of req.session.carts) {
        
        if (item.book.id == book_id) {
            item.schedule.rent_date = data.rent_date
            item.schedule.rent_time = data.rent_time
            item.schedule.back_date = data.return_date
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