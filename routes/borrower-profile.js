var express = require('express');
var router = express.Router();

const borrowData = require("./borrow-data.js");
const borrower = {
    "1612864": {
        id: "1612864",
        name: "Vuong Hy",
        borrowData: borrowData,
    },
    "1612868": {
        id: "1612868",
        name: "Vuong Hy XX",
    }
}

router.get('/', function (req, res, next) {
    res.render('borrower-profile', {layout:"layout-lib", search: false, export: true, borrower: borrower[req.query.id]});
});

module.exports = router;