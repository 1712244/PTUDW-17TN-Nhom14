var express = require('express');
var router = express.Router();

const sectionSachHot =
{
  title: "Sách hot chuyên ngành",
  list_categories: ["Công nghệ phần mềm", "Trí tuệ nhân tạo", "Cơ sở dữ liệu",
              "Mạng máy tính", "Khoa học máy tính", "Phát triển ứng dụng web"],
  books: [{thumbnail:"/images/book-thumbnail.png", name:"Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng"} ]
};

const sectionTinTuc = {
  title: "Tin tức",
  other_news: "Các tin khác",
  more_news: "→ xem tất cả tin tức",
  articles: [
    {
      title:"Hội sách khoa",
      date:"01/01/2020",
      thumbnail:"/images/news-thumbnail.png"
    },
    {
      title:"Thông báo đăng ký mua sách",
      date:"01/01/2020",
      thumbnail:"/images/news-thumbnail.png"
    }
  ]
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Thư viện Khoa CNTT DHQG TPHCM', sectionSachHot, sectionTinTuc });
});




module.exports = router;
