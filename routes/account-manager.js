var express = require('express');
var router = express.Router();



const account_data = [
    { accountID: "1712244", account_name: "1712244", email: "1712244@student.hcmus.edu.vn", username: "Lê Nguyên Trí", type: "Sinh Viên", book_left: 10, total: 20, activate: "Hoạt động" },
    { accountID: "0000001", account_name: "tmtriet", email: "tmtriet@fit.hcmus.edu.vn", username: "Trần Minh Triết", type: "Giáo Viên", book_left: 10, total: 20, activate: "Hoạt động" },
    { accountID: "1712260", account_name: "1712260", email: "1712260@student.hcmus.edu.vn", username: "Phạm Trọng Thắng", type: "Sinh Viên", book_left: 10, total: 20, activate: "Hoạt động" }
]

router.get('/', function(req, res, next) {
    res.render('account-manager', { layout: "layout-lib", account_data });
});

module.exports = router;