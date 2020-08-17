var express = require('express');
var router = express.Router();


//==================dummy data for buy book manager ==========================


var Booking_arr = {
    booking_book: [
        { ISBN: "123456", bookID: "001", book_name: "book1", book_author: "???????", reprint: 1, producer: "NXB trẻ", booking_date: "1/1/2020" },
        { ISBN: "123456", bookID: "002", book_name: "book2", book_author: "???????", reprint: 1, producer: "NXB Kim Đồng", booking_date: "1/1/2020" },
        { ISBN: "123456", bookID: "003", book_name: "book3", book_author: "???????", reprint: 1, producer: "NXB Thế giới", booking_date: "1/1/2020" }
    ]
}



var Bought_arr = {
    bought_book: [
        { ISBN: "123456", bookID: "004", book_name: "book4", book_author: "???????", reprint: 1, producer: "NXB trẻ", booking_date: "1/1/2020", bought_date: "1/1/2020" },
        { ISBN: "123456", bookID: "005", book_name: "book5", book_author: "???????", reprint: 1, producer: "NXB Kim Đồng", booking_date: "1/1/2020", bought_date: "1/1/2020" },
        { ISBN: "123456", bookID: "006", book_name: "book6", book_author: "???????", reprint: 1, producer: "NXB Thế giới", booking_date: "1/1/2020", bought_date: "1/1/2020" }
    ]
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('buy-book-manager', {layout: "layout", Booking_arr, Bought_arr });
});

module.exports = router;