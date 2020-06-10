var express = require('express');
var router = express.Router();



const booking_data = [
    { ISBN: "001", book_name: "book1", reprint: 1, author: "abc", producer: "NXB Trẻ", booking_date: "01/01/2020", orderer: "Trần Minh Triết" },
    { ISBN: "002", book_name: "book2", reprint: 2, author: "xyz", producer: "NXB Thế Giới", booking_date: "01/01/2020", orderer: "Đinh Bá Tiến" },
    { ISBN: "003", book_name: "book3", reprint: 3, author: "gaoranger", producer: "NXB Phương Nam", booking_date: "01/01/2020", orderer: "Đinh Bá Tiến" }
]

router.get('/', function(req, res, next) {
    res.render('lib-booking-book-manager', { layout: "layout-lib", booking_data });
});

module.exports = router;