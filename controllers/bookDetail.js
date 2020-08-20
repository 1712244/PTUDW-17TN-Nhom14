const bookService = require('./../services/book');
const authorService = require("./../services/author");
const commentService = require('./../services/comment');
const accountService = require('./../services/account');
const userService  = require('./../services/user');

const config = require("./../config");
const { all } = require('../routes/front-end/book-detail');
const user = require('./../services/user');

const _related_booklist = [
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
];


const sectionBook = {
    book_title: "Kỹ nghệ phần mềm",
    book_author: "TS. Lê Văn Phùng",
    book_date: "01/01/2020",
    book_rates: 9999,
    average_rate: 3.5,
    book_para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at. Mauris rutrum justo dui, auctor sagittis enim suscipit ut. Vestibulum gravida dui quam, sit amet porta tortor malesuada id. Praesent ut pharetra sapien. Praesent sit amet consectetur lorem. Nam at mi non sapien efficitur porttitor vel quis nulla. Praesent pulvinar, ligula non molestie cursus, purus turpis tincidunt sem, eu sollicitudin ligula libero eget est. Cras dignissim tortor ante, et tincidunt odio dictum eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend ante ac neque aliquet, at gravida lectus ultrices. Quisque id nulla neque. Sed quis mi at purus dictum volutpat. Aenean a malesuada risus, ut pulvinar nisl. Donec facilisis pellentesque ex, ut blandit ligula accumsan nec. Aliquam nibh nulla, elementum vitae mattis quis, consectetur et risus. Nullam quis turpis diam. Vestibulum iaculis eros vitae nunc volutpat egestas. Fusce fermentum at leo a ultrices. Nunc sollicitudin, risus non ultrices ultricies, magna urna pharetra lacus, sed vehicula leo quam id risus. Nam elementum sit amet nunc aliquet aliquam",
    book_image: "images/book-thumbnail.png",
    user_comments: [{
            avatar: '/images/news-thumbnail.png',
            username: 1712760,
            user_rate: 3,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            avatar: '/images/news-thumbnail.png',
            username: 1712760,
            user_rate: 3,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ],
    related_booklist: _related_booklist
}

function to_01(rate) {
    var res_list = [];
    for (var i = 0; i < 5; i++) {
        if (rate > 0.5)
            res_list.push(1);
        else if (rate == 0.5)
            res_list.push(0.5);
        else
            res_list.push(0);
        rate -= 1;
    }
    return res_list;
}



async function getById(req, res, next) {
    const data = req.params;
    var book = await bookService.getById(data.id);
    var all_comment = await commentService.getAll();
    // var account = await accountService.getAll();
    var all_author = await authorService.getAll();
    book.author.forEach(function(part, index) {
        all_author.forEach(cau => {
            if (this[index] == cau._id) {
                this[index] = cau;
            }
        })
    }, book.author);
    book.user_comments = [] 
    all_comment.forEach(cmt => {
        if (cmt.book_id == book.id) { 
            book.user_comments.push(cmt)
        }
    });
    book.average_rate = 0;
    book.user_comments.forEach(cmt =>{
        book.average_rate += cmt.rate
    })
    book.average_rate /= book.user_comments.length;
    book.book_rates = book.user_comments.length;
    book.average_rate = to_01(book.average_rate);
    for (var comment of book.user_comments){
        comment.rate = to_01(comment.rate);
        comment.username = await accountService.findByIdUser(comment.user_id);
        comment.username = comment.username.username
        comment.image_url = await userService.getById(comment.user_id)
        comment.image_url = comment.image_url.avatar
    }

    book.related_booklist = await bookService.getAll();
    book.related_booklist.forEach(cbook => {
        cbook.author.forEach(function(part, index) {
          all_author.forEach(cauth => {
            if (this[index] == cauth._id){
              this[index] = cauth.name;
            }
          })
        }, cbook.author);
      });
    res.render('book-detail', { layout: "layout", book });
}

module.exports = {
    getById: getById
}