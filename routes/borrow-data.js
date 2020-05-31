
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function randomBorrow(d) {
    return {
        id: Math.trunc(Math.random() * 1000).toString(),
        bookedBorrowDate: new Date(d),
        returnDueDate: (new Date(d)).addDays(30),
        borrower: {
            id: "1612864",
            name: "Vuong Hy",
        },

        returnDate: [(new Date(d)).addDays(25), null, null],
        books: [
            {
                id: "MAS-QWX",
                name: "Lập trình hướng đối tượng",
                author: "Noone",
            },
            {
                id: "DWI-MCX",
                name: "Trí tuệ nhân tạo",
                author: "Noone II",
            },
            {
                id: "DWI-MCX",
                name: "Không biết là sách gì luôn",
                author: "Noone III",
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

];

module.exports = borrowData;