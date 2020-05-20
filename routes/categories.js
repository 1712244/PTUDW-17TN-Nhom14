var express = require('express');
var router = express.Router();

const list_most_famous_categories = [
    'Khoa học máy tính', 'C++', 'Java',
    'Công nghệ phần mềm', 'C', 'Web', 'Mobile',
    'iOS', 'Assembly', 'AI', 'Mạng máy tính',
    'Cơ sở dữ liệu', 'Giáo trình', 'Lập trình song song', 'Matlab'
];

router.get('/', function (req, res, next) {
  res.render('categories', { title:"Các thể loại của sách", list_categories:list_most_famous_categories  });
});




module.exports = router;
