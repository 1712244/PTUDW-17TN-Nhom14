var express = require('express');
var router = express.Router();




router.get('/', function (req, res, next) {
  const profile = {
    username: res.locals.user.username,
    name: res.locals.user.user.name,
    mssv: res.locals.user.username,
    usercode: res.locals.user.id,
    avatar:res.locals.user.user.avatar,
    qr_code:"/images/qr-code.svg"
}
  res.render('profile', {layout: "layout", profile:profile  });
});




module.exports = router;
