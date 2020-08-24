const th = require("./helper/time-helper");
const userService = require("../../services/user")
const bookService = require("../../services/book");
const scheduleService = require("../../services/schedule");
const authorService = require("../../services/author");
const config = require("../../config");

function randomBorrow(d) {
    d = new Date(d);
    var borrowDate = (d < new Date())?d : null;
    var returnDate = (new Date(d)).addDays(25);
    if (returnDate > new Date()) {
        returnDate = null;
    }

    return {
        id: Math.trunc(Math.random() * 1000).toString(),
        bookedBorrowDate: d,
        borrowDate: borrowDate, 
        returnDueDate: (new Date(d)).addDays(30),
        borrower: {
            id: "1612864",
            name: "Vuong Hy",
        },

        books: [
            {
                id: "MAS-QWX",
                name: "Lập trình hướng đối tượng",
                author: "Noone",
                returnDate: returnDate,
                lost: false,
            },
            {
                id: "DWI-MCX",
                name: "Trí tuệ nhân tạo",
                author: "Noone II",
                returnDate: null,
                lost: false,
            },
            {
                id: "DWI-MCX",
                name: "Không biết là sách gì luôn",
                author: "Noone III",
                returnDate: null,
                lost: false,
            }
        ]
    }
}

var borrowData = [
    randomBorrow("2020-05-29 07:00"),
    randomBorrow("2020-05-29 12:00"),
    randomBorrow("2020-05-30 8:00"),
    randomBorrow("2020-05-30 9:00"),
    randomBorrow("2020-05-30 15:00"),
    randomBorrow("2020-05-30 16:00"),
    randomBorrow("2020-05-31 9:30"),
    randomBorrow((new Date()).addDays(-32)),
    randomBorrow((new Date()).addDays(-28)),
    randomBorrow((new Date()).addDays(-28)),
    randomBorrow((new Date()).addDays(-26)),
    randomBorrow((new Date()).addDays(-24)),
    randomBorrow((new Date()).addDays(-22)),
    randomBorrow((new Date()).addHours(-2)),
    randomBorrow(new Date()),
    randomBorrow(new Date()),
    randomBorrow(new Date()),
    randomBorrow((new Date()).addHours(3)),
    randomBorrow((new Date()).addDays(1).addHours(-2)),
    randomBorrow((new Date()).addDays(2)),
    randomBorrow((new Date()).addDays(2).addHours(1)),


];

async function GetAllBorrowData() {
    borrowData = await scheduleService.getAll();
    borrowData.sort((a,b) => {
        if (a.book_date != b.book_date)
            return a.book_date - b.book_date;
        else if (a.user_id != b.user_id)
            return a.user_id - b.user_id;
        else
            return a.book_id - b.book_id;
    })

    id = 0;
    async function init_borrow(b) {
        return {
            id: b._id,
            bookedBorrowDate: b.book_date,
            borrowDate: b.recieve_date,
            returnDueDate: b.due_date,
            borrower: {
                id: b.user_id,
                name: (await userService.getById(b.user_id)).name,
            },
            books: []
        }
    }

    borrows = [];
    id = 0
    borrow = await init_borrow(borrowData[0])
    for(const b of borrowData) {
        if (b.book_date !== borrow.bookedBorrowDate || b.user_id !== borrow.borrower.id) {
            borrows.push(borrow)
            borrow = await init_borrow(b)
        }
        book = await bookService.getByBookId(b.book_id)
        borrow.books.push({
            id: book.id,
            name: book.book_name,
            author: (await authorService.getById(book.author[0])).name,
            returnDate: b.return_date,
            lost: b.status == config.SCHEDULE_TYPE.LOST,
        })
    }
    borrows.push(borrow)

    return new BorrowData(borrows)
}

function BorrowData(borrowData) {
    
    this.borrowData = borrowData;

    this.sortByBookedDate = function() {
        borrowData.sort((a,b)=>a.bookedBorrowDate - b.bookedBorrowDate);
        return this
    }

    this.sortByDueDate = function() {
        borrowData.sort((a,b) => a.returnDueDate - b.returnDueDate);
        return this
    }

    this.getTodayBorrow = function() {
        const today = new Date();
        return new BorrowData(borrowData.filter((borrow)=>th.sameDay(borrow.bookedBorrowDate, today)))
    }    

    this.getBorrowDataByUser = function(userID) {
        return new BorrowData(borrowData.filter((borrow)=>borrow.borrower.id === userID))
    }
    
    this.getBorrowDataByBook = function(bookID) {
        var bookData = [];
        borrowData.forEach((borrow) => {
            const temp = borrow.books.filter((book) => book.id === bookID);
            if (temp.length > 0) {
                var borrowCopy = Object.assign({}, borrow)
                borrowCopy.books = temp;
                bookData.push(borrowCopy);
            }
        });
        return new BorrowData(bookData);
    }

    this.getUnreturnedData = function() {
        var unreturnedData = [];
        borrowData.forEach((borrow) => {
            if (!borrow.borrowDate) {
                return;
            }
    
            const temp = borrow.books.filter((book) => book.returnDate === null);
            if (temp.length > 0) {
                var borrowCopy = Object.assign({}, borrow)
                borrowCopy.books = temp;
                unreturnedData.push(borrowCopy);
            }
        });
    
        return new BorrowData(unreturnedData);
    }
}

module.exports = {
    rawData: (new BorrowData(borrowData)).sortByBookedDate(),
    BorrowData,
    GetAllBorrowData,
}