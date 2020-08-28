var express = require('express');
var router = express.Router();
var userService = require('../../services/user')

const bd = require("./borrow-data.js");

async function queryUser(userID) {
    const rawData = await bd.GetAllBorrowData()
    var user = await userService.getById(userID);
    const borrowData = rawData.getBorrowDataByUser(userID);


    borrowData.sortByBookedDate();
    user.borrowData = borrowData.borrowData;

    const unreturnedData = borrowData.getUnreturnedData();
    unreturnedData.sortByDueDate();
    user.unreturnedData = unreturnedData.borrowData;

    // console.log(user)
    return user;
}

router.get('/', async function (req, res, next) {
    const user = await queryUser(req.query.id);
    res.render('borrower-profile', {layout:"layout-lib", search: false, export: true, borrower: user, activeID: req.query.activeID, linkType: req.query.type,});
});

module.exports = router;