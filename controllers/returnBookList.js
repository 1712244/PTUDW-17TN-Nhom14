const bookService = require('./../services/book');
const authorService = require("./../services/author");
const commentService = require('./../services/comment');
const accountService = require('./../services/account');
const userService = require('./../services/user');
const scheduleService = require('./../services/schedule');
const dateTimeService = require("./../utils/dateTime");

var config = require('./../config')

async function toStringDDMMYYYY(date) {
    var month = parseInt(date.getMonth()) + 1
    return date.getDate() + '/' + month + '/' + date.getFullYear();
}

async function getReturnBookList(req, res, next) {
    var all_sche = await scheduleService.getAll();
    var all_book = await bookService.getAll();
    var all_author = await authorService.getAll();



    all_sche.forEach(cs => {
        var breakhere = false
        for (var cb of all_book) {
            if (cs.book_id == cb.id && !breakhere) {
                cs.book = cb
                cs.book.author.forEach(function (part, index) {
                    all_author.forEach(cau => {
                        if (this[index] == cau._id) {
                            this[index] = cau;
                        }
                    })
                }, cs.book.author);
                breakhere = true
            }
        }
    })


    var return_book_list = []
    var history_books = []
    for (var cs of all_sche) {
        if (cs.user_id == req.session.username) {
            var item = {
                thumbnail: cs.book.image_url,
                name: cs.book.book_name,
                author: cs.book.author,
                book_date: await toStringDDMMYYYY(cs.book_date),
                due_date: await toStringDDMMYYYY(cs.due_date)
            }
            if (cs.status == config.SCHEDULE_TYPE.WAITING_RETURN || cs.status == config.SCHEDULE_TYPE.LOST || cs.status == config.SCHEDULE_TYPE.EXPIRED) {
                return_book_list.push(item)
            }
            else if (cs.status == config.SCHEDULE_TYPE.RETURNED) {
                history_books.push(item)
            }
        }
    }
    res.render('return-book-list', { layout: "layout", return_book_list: return_book_list, history_books: history_books });
}

module.exports = {
    getReturnBookList: getReturnBookList,
}