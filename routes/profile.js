var express = require('express');
var router = express.Router();

const profile = {
    username: "ptthang",
    name: "Phạm Trọng Thắng",
    mssv: "1712760",
    usercode: "1712760",
    avatar:null,
    qr_code:"/images/qr-code.svg"
}


router.get('/', function (req, res, next) {
  res.render('profile', { profile:profile  });
});




module.exports = router;
