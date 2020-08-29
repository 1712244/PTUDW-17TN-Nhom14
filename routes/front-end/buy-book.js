var express = require('express');
var router = express.Router();
const BuyRegistedController = require("./../../controllers/buy-registed")
    /* GET users listing. */

let buyBookSection = {
    book_name: "",
    author: "",
    producer: "",
    reprint: "",
    discipline: "",
    book_isbn: ""
}

router.get('/', function(req, res, next) {
    res.render('buy-book', { layout: "layout", buyBookSection });
});

router.get("/:id", BuyRegistedController.updatePage);
module.exports = router;