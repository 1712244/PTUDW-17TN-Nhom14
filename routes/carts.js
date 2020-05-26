var express = require('express');
var router = express.Router();

const carts = [
    {
    thumbnail: "/images/book-thumbnail.png",
    name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng",
    rent_date: "29/2/2020",
    return_date: "29/3/2020"
}
];


router.get('/', function (req, res, next) {
    res.render('carts', { carts: carts });
});




module.exports = router;
