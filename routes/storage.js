var express = require('express');
var router = express.Router();

const sectionSachHot =
{
  title: "Sách nhiều người đọc nhất",
  books: [
    [
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", views: 9999 },
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", views: 9999 },
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", views: 9999 },
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", views: 9999 },
    ],
    [
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", views: 9999 },
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", views: 9999 },
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", views: 9999 },
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", views: 9999 },
    ],
  ]
};
const sectionSach =
{
  title: "Sách chuyên ngành",
  list_categories: [
    ["Công nghệ phần mềm", "Trí tuệ nhân tạo", "Cơ sở dữ liệu",
      "Mạng máy tính", "Khoa học máy tính", "Phát triển ứng dụng web"],
    ["Công nghệ phần mềm", "Trí tuệ nhân tạo", "Cơ sở dữ liệu",
      "Mạng máy tính", "Khoa học máy tính", "Phát triển ứng dụng web"],
  ],
  books: [
    [
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" },
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" },
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" },
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" },
    ],
    [
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" },
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" },
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" },
      { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng" },
    ],
  ]
};


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('storage', { title: 'Kho sách', sectionSachHot, sectionSach });
});




module.exports = router;
