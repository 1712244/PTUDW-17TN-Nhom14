const bookService = require('./../services/book');
const authorService = require("./../services/author");
const commentService = require('./../services/comment');
const accountService = require('./../services/account');
const userService  = require('./../services/user');
const scheduleService  = require('./../services/schedule');
const dateTimeService = require("./../utils/dateTime");
const miscUtil = require("./../utils/misc");

const config = require("./../config");
const { all } = require('../routes/front-end/book-detail');
const user = require('./../services/user');



async function toStringDDMMYYYY(date) {
    var month = parseInt(date.getMonth())+1
    return date.getDate() + '/' + month  + '/' + date.getFullYear();
}

function to_01(rate) {
    var res_list = [];
    for (var i = 0; i < 5; i++) {
        if (rate > 0.5)
            res_list.push(1);
        else if (rate == 0.5)
            res_list.push(0.5);
        else
            res_list.push(0);
        rate -= 1;
    }
    return res_list;
}

function isBookAvailable(all_book, book_id) {
    for (var item of all_book) {
        if (item.id == book_id && item.id_borrower == "") {
            return 1
        } 
    }
    return 0;
}

async function getById(req, res, next) {
    const data = req.params;
    var book = await bookService.getById(data.id);
    var all_comment = await commentService.getAll();
    // var account = await accountService.getAll();
    var all_author = await authorService.getAll();
    book.author.forEach(function(part, index) {
        all_author.forEach(cau => {
            if (this[index] == cau._id) {
                this[index] = cau;
            }
        })
    }, book.author);
    book.user_comments = [] 
    all_comment.forEach(cmt => {
        if (cmt.book_id == book.id) { 
            book.user_comments.push(cmt)
        }
    });
    book.average_rate = 0;
    book.user_comments.forEach(cmt =>{
        book.average_rate += cmt.rate
    })
    book.average_rate /= book.user_comments.length;
    book.book_rates = book.user_comments.length;
    book.average_rate = to_01(book.average_rate);
    for (var comment of book.user_comments){
        comment.rate = to_01(comment.rate);
        comment.username = await accountService.findByIdUser(comment.user_id);
        comment.username = comment.username.username
        comment.image_url = await userService.getById(comment.user_id)
        comment.image_url = comment.image_url.avatar
    }
    var all_book = await bookService.getAll()
    book.related_booklist = await miscUtil.cleanAllBook(all_book);
    book.related_booklist.forEach(cbook => {
        cbook.author.forEach(function(part, index) {
          all_author.forEach(cauth => {
            if (this[index] == cauth._id){
              this[index] = cauth.name;
            }
          })
        }, cbook.author);
      });

    book.available_for_rent = await isBookAvailable(all_book, book.id); // 1 ok 0 no
    book._id = book._id.toString()
    res.render('book-detail', { layout: "layout", book });
}

async function postBorrowId(req, res, next) {
    const data = req.params;
    var book = await bookService.getById(data.id);
    var all_author = await authorService.getAll();
    book.author.forEach(function(part, index) {
        all_author.forEach(cau => {
            if (this[index] == cau._id) {
                this[index] = cau;
            }
        })
    }, book.author);
    var schedule = {
        book_id: book.id,
        user_id: res.locals.user.id,
        rent_date: await toStringDDMMYYYY(dateTimeService.now()),
        back_date: await toStringDDMMYYYY(dateTimeService.now()),
        location: "Thư viện",
        status: 0
    }
    if (!req.session.carts) {
        req.session.carts = []
    }
    req.session.carts.push({schedule, book})
    res.redirect('/carts');
}

module.exports = {
    getById: getById,
    postBorrowId:postBorrowId,
}