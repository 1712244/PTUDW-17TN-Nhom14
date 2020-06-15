var express = require('express');
var router = express.Router();

const bd = require("./borrow-data.js");
const rawData = bd.rawData;
const borrower = {
    "1612864": {
        id: "1612864",
        name: "Vuong Hy",
    },
    "1612868": {
        id: "1612868",
        name: "Vuong Hy XX",
    }
}

function queryUser(userID) {
    var user = borrower[userID];
    const borrowData = rawData.getBorrowDataByUser(userID);
    borrowData.sortByBookedDate();
    user.borrowData = borrowData.borrowData;

    const unreturnedData = borrowData.getUnreturnedData();
    unreturnedData.sortByDueDate();
    user.unreturnedData = unreturnedData.borrowData;
    return user;
}

router.get('/', function (req, res, next) {
    const user = queryUser(req.query.id);
    res.render('borrower-profile', {layout:"layout-lib", search: false, export: true, borrower: user, activeID: req.query.activeID, linkType: req.query.type,});
});

module.exports = router;