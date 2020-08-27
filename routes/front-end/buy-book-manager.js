var express = require('express');
var router = express.Router();
const buyBookManagerController = require("./../../controllers/buy-book-manager")


//==================dummy data for buy book manager ==========================


var Booking_arr = {
    booking_book: [
        { ISBN: "123456", user_id: "001", book_name: "book1", author: "???????", reprint: 1, producer: "NXB trẻ", date_registed: "1/1/2020", discipline: "Toán" },
        { ISBN: "123456", user_id: "002", book_name: "book2", author: "???????", reprint: 1, producer: "NXB Kim Đồng", date_registed: "1/1/2020", discipline: "Toán" },
        { ISBN: "123456", user_id: "003", book_name: "book3", author: "???????", reprint: 1, producer: "NXB Thế giới", date_registed: "1/1/2020", discipline: "Toán" }
    ]
}



var Bought_arr = {
    bought_book: [
        { ISBN: "123456", user_id: "004", book_name: "book4", author: "???????", reprint: 1, producer: "NXB trẻ", date_registed: "1/1/2020", bought_date: "1/1/2020", discipline: "Toán" },
        { ISBN: "123456", user_id: "005", book_name: "book5", author: "???????", reprint: 1, producer: "NXB Kim Đồng", date_registed: "1/1/2020", bought_date: "1/1/2020", discipline: "Toán" },
        { ISBN: "123456", user_id: "006", book_name: "book6", author: "???????", reprint: 1, producer: "NXB Thế giới", date_registed: "1/1/2020", bought_date: "1/1/2020", discipline: "Toán" }
    ]
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('buy-book-manager', { layout: "layout", Booking_arr, Bought_arr });
});

router.get('/test', buyBookManagerController.getData);
module.exports = router;