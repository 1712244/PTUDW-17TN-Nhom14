var express = require('express');
var router = express.Router();

const cart_detail =  {
    thumbnail: "/images/book-thumbnail.png",
    name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng",
    rent_time:"17:00",
    rent_date: "29/2/2020",
    return_date: "29/3/2020",
    location: "Thư viện Khoa",
};


router.get('/', function (req, res, next) {
    res.render('cart-detail', { cart_detail: cart_detail });
});




module.exports = router;
