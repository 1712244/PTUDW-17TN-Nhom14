const th = require("./helper/time-helper");
const userService = require("../../services/user")
const bookService = require("../../services/book");
const scheduleService = require("../../services/schedule");
const authorService = require("../../services/author");
const config = require("../../config");
const book = require("../../services/book");

async function GetAllBorrowData() {
    let borrowData = await scheduleService.getAll();
    borrowData.sort((a,b) => {
        if (a.book_date != b.book_date)
            return a.book_date - b.book_date;
        else if (a.user_id != b.user_id)
            return a.user_id - b.user_id;
        else
            return a.book_id - b.book_id;
    })

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
            ids: [],
            books: []
        }
    }

    let borrows = [];
    let borrow = await init_borrow(borrowData[0])
    for(const b of borrowData) {
        if (b.book_date.getTime() !== borrow.bookedBorrowDate.getTime() || b.user_id !== borrow.borrower.id) {
            borrows.push(borrow)
            borrow = await init_borrow(b)
        }
        const book = await bookService.getByBookId(b.book_id)
        borrow.ids.push(b._id);
        borrow.books.push({
            bid : b._id,
            id: book.id,
            name: book.book_name,
            genre: book.tag,
            author: (await authorService.getById(book.author[0])).name,
            recieveDate: b.recieve_date,
            returnDate: b.return_date,
            lost: b.status == config.SCHEDULE_TYPE.LOST,
            cancelled: b.status == config.SCHEDULE_TYPE.ABORT,
            status: b.status 
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

    this.getBorrowInDateRange = function(from, to) {
        const today = new Date();
        return new BorrowData(borrowData.filter((borrow)=> {
            t = borrow.bookedBorrowDate.getTime() 
            return from.getTime() <= t && t <= to.getTime()
        }));
    }

    this.getStatistic = function() {
        let borrowByBook = {};
        let borrowReturnByDate = {};
        let borrowByReader = {};
        let borrowByGenre = {};
        let status = ["Đặt mượn","Đang mượn", "Đã trả", "Đã hủy", "Trễ hẹn", "Mất"];
        let borrowByStatus = [0,0,0,0,0,0];

        for (b of borrowData) {
            if (!borrowByReader[b.borrower.id]) {
                borrowByReader[b.borrower.id] = {
                    name: b.borrower.name,
                    count: 0,
                }
            }
            borrowByReader[b.borrower.id].count += b.books.length;
            for (let book of b.books) {
                if (!borrowByBook[book.id]) {
                    borrowByBook[book.id] = {
                        name:book.name,
                        count:0,
                    }
                }
                borrowByBook[book.id].count++;
                for (g of book.genre)
                    borrowByGenre[g] = (borrowByGenre[g] || 0) + 1;

                borrowByStatus[book.status]++;

                if (book.recieveDate) {
                    let borrowDate = book.recieveDate.toShortDateString();       
                    if (!borrowReturnByDate[borrowDate]) {
                        borrowReturnByDate[borrowDate] = {
                            borrow: 0,
                            return: 0,
                        }
                    } 
                    borrowReturnByDate[borrowDate].borrow++;
                }

                if(book.returnDate) {
                    let returnDate = book.returnDate.toShortDateString();
                    if (!borrowReturnByDate[returnDate]) {
                        borrowReturnByDate[returnDate] = {
                            borrow: 0,
                            return: 0,
                        }
                    }
                    borrowReturnByDate[returnDate].return++;
                }
            }
        }

        borrowByBook = Object.entries(borrowByBook).sort((a,b) =>(b[1].count - a[1].count)).splice(0,3);
        borrowByReader = Object.entries(borrowByReader).sort((a,b) =>(b[1].count - a[1].count)).splice(0,3);

        bookBorrowData = {
            id: borrowByBook.map(t=>t[0]),
            books: borrowByBook.map(t => t[1].name),
            counts: borrowByBook.map(t => t[1].count),
        }

        borrowReturnData = {
            time: Object.keys(borrowReturnByDate),
            borrowCounts: Object.values(borrowReturnByDate).map(t=>t.borrow),
            returnCounts: Object.values(borrowReturnByDate).map(t=>t.return),
        }

        readerBorrowData = {
            ids: borrowByReader.map(t=>t[0]),
            usernames: borrowByReader.map(t =>t[1].name),
            counts: borrowByReader.map(t =>t[1].count),
        }

        genreBorrowData = {
            genre: Object.keys(borrowByGenre),
            counts: Object.values(borrowByGenre),
        }

        statusData = {
            state: status,
            counts: borrowByStatus,
        }

        return {
            bookBorrowData,
            borrowReturnData,
            readerBorrowData,
            genreBorrowData,
            statusData,
        }

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
    BorrowData,
    GetAllBorrowData,
}