const DisciplineService = require("./../services/disciplines");
const BookService = require("./../services/book");
const AuthorService = require("./../services/author");
const commentService = require('./../services/comment');
const miscUtil = require("./../utils/misc");

const config = require("./../config")


const sectionSachHot =
{
    title: "Sách nhiều người đọc nhất",
    books: [
        [
            { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", rates: 9999 },
            { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", rates: 9999 },
            { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", rates: 9999 },
            { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", rates: 9999 },
        ],
        [
            { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", rates: 9999 },
            { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", rates: 9999 },
            { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", rates: 9999 },
            { thumbnail: "/images/book-thumbnail.png", name: "Kỹ nghệ phần mềm", author: "TS. Lê Văn Phùng", rates: 9999 },
        ],
    ]
};
const sectionSach =
{
    title: "Sách chuyên ngành",    
};

async function mergeBook(all_book, all_disc, all_author) {
    all_book.forEach(cbook => {
        all_disc.forEach(cdisc => {
            if (cbook.discipline == cdisc._id) {
                cbook.discipline = cdisc;
                cbook.discipline._id = cbook.discipline._id.toString();
            }
        });
        cbook.author.forEach(function (part, index) {
            all_author.forEach(cauth => {
                if (this[index] == cauth._id) {
                    this[index] = cauth.name;
                }
            })
        }, cbook.author);
    });
    return all_book
}


async function splitBookDiscipline(all_book, all_disc) {
    all_disc.forEach(cdisc => {
        cdisc.books = []
        all_book.forEach(cbook => {
            if (cbook.discipline._id == cdisc._id) {
                cdisc.books.push(cbook)
            }
        })
    })
    return all_disc
}

async function getStorage(req, res, next) {
    var all_disc = await DisciplineService.getAll();
    var all_book = await BookService.getAll(); 
    var all_author = await AuthorService.getAll();
    var all_comment = await commentService.getAll();
    all_book = await miscUtil.cleanAllBook(all_book);
    all_book = await mergeBook(all_book, all_disc, all_author);
    all_disc = await splitBookDiscipline(all_book, all_disc)
    sectionSach.list_categories = all_disc
    
    all_book.forEach(cbook => {
        cbook.rates = 0
        all_comment.forEach(cmt =>{
            if (cmt.book_id == cbook.id){
                cbook.rates += 1
            }
        })
    })
    all_book.sort((a, b) => parseFloat(b.rates) - parseFloat(a.rates));

    sectionSachHot.books = all_book
    res.render('storage', { layout: "layout", title: 'Kho sách', sectionSachHot, sectionSach });
}

module.exports = {
    getStorage: getStorage
}