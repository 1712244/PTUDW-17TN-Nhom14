var express = require('express');
var router = express.Router();

const profile = {
    username: "ptthang",
    name: "Phạm Trọng Thắng",
    mssv: "1712760",
    usercode: "1712760",
    avatar:null
  }


router.get('/', function (req, res, next) {
  res.render('lib-profile', {layout: "layout-lib", profile});
});




module.exports = router;
