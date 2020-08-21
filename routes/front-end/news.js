var express = require('express');
var router = express.Router();
const newsController = require("./../../controllers/news")

const sectionSuKien = {
    title: "Sự kiện",
    other_news: "Các tin khác",
    more_news: "→ xem tất cả sự kiện",
    articles: [{
            title: "Hội sách khoa",
            date: "01/01/2020",
            thumbnail: "/images/news-thumbnail.png"
        },
        {
            title: "Ngày hội đọc sách dành cho mọi người",
            date: "01/01/2020",
            thumbnail: "/images/news-thumbnail.png"
        }
    ]
}

const sectionThongBao = {
    title: "Thông báo",
    other_news: "Các tin khác",
    more_news: "→ xem tất cả thông báo",
    articles: [{
            title: "Danh sách sinh viên trả sách muộn",
            date: "01/01/2020",
            thumbnail: "/images/alert-late-thumbnail.png"
        },
        {
            title: "Thông báo đăng ký mua sách",
            date: "01/01/2020",
            thumbnail: "/images/news-thumbnail.png"
        },
        {
            title: "Thông báo đăng ký mua sách cap 2",
            date: "01/01/2020",
            thumbnail: "/images/news-thumbnail.png"
        },
        {
            title: "Thông báo đăng ký mua sách cap 3",
            date: "01/01/2020",
            thumbnail: "/images/news-thumbnail.png"
        }
    ]
}

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('news', { layout: "layout", title: 'Trang Tin Tức', sectionSuKien, sectionThongBao });
// });

router.get('/', newsController.get3BylatestDate);



module.exports = router;