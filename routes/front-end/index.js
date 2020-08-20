var express = require('express');
var router = express.Router();
const DisciplineService =  require("./../../services/disciplines");
const BookService =  require("./../../services/book");
const AuthorService =  require("./../../services/author");


const sectionSachHot =
{
  title: "Sách hot chuyên ngành",
  list_categories: 
    ["Công nghệ phần mềm", "Trí tuệ nhân tạo", "Cơ sở dữ liệu",
      "Mạng máy tính", "Khoa học máy tính", "Phát triển ứng dụng web"]
  ,
  books: [
   
      { image_url: "/images/book-thumbnail.png", book_name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" , discipline: "Công nghệ phần mềm"},
      { image_url: "/images/book-thumbnail.png", book_name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" , discipline: "Công nghệ phần mềm"},
      { image_url: "/images/book-thumbnail.png", book_name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" , discipline: "Công nghệ phần mềm"},
      { image_url: "/images/book-thumbnail.png", book_name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" , discipline: "Công nghệ phần mềm"},   
      { image_url: "/images/book-thumbnail.png", book_name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" , discipline: "Công nghệ phần mềm"},
      { image_url: "/images/book-thumbnail.png", book_name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" , discipline: "Công nghệ phần mềm"},
      { image_url: "/images/book-thumbnail.png", book_name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" , discipline: "Công nghệ phần mềm"},
      { image_url: "/images/book-thumbnail.png", book_name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" , discipline: "Công nghệ phần mềm"},
    ],
  
};

const sectionTinTuc = {
  title: "Tin tức",
  other_news: "Các tin khác",
  more_news: "→ xem tất cả tin tức",
  articles: [
    {
      title: "Hội sách khoa",
      date: "01/01/2020",
      image_url: "/images/news-thumbnail.png"
    },
    {
      title: "Thông báo đăng ký mua sách",
      date: "01/01/2020",
      image_url: "/images/news-thumbnail.png"
    }
  ]
}

async function mergeBook(){
  var all_disc = await DisciplineService.getAll();
  var all_book = await BookService.getAll();
  var all_author = await AuthorService.getAll();
  all_book.forEach(cbook => {
    all_disc.forEach(cdisc => {
      if (cbook.discipline == cdisc._id) {
        cbook.discipline = cdisc.name
      }
    });
    cbook.author.forEach(function(part, index) {
      all_author.forEach(cauth => {
        if (this[index] == cauth._id){
          this[index] = cauth.name;
        }
      })
    }, cbook.author);
  });
  console.log(all_book)
  return all_book
}

/* GET home page. */
router.get('/', async function (req, res, next) {
  const all_book = await mergeBook();
  sectionSachHot.books = all_book; 
  sectionSachHot.list_categories = await DisciplineService.getAllName();
  res.render('index', {layout:"layout", title: 'Thư viện Khoa CNTT DHQG TPHCM', sectionSachHot, sectionTinTuc });
});




module.exports = router;
