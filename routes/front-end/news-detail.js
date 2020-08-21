var express = require('express');
var newsDetailController = require("./../../controllers/news-detail");
var router = express.Router();

// const sectionArticles = {
//     article_title: "Ngày hội sách",
//     article_date: "01/01/2020",
//     article_para: "<p><strong>Hello</strong>Hello World!</p><p>Some initial <strong>bold</strong> text</p><p><br></p>",
//     article_image: "images/news-thumbnail.png"
// }

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.render('news-detail', { layout: "layout", sectionArticles });
// });

router.get('/:id', newsDetailController.getById);



module.exports = router;