// Lưu trữ các hàm helper dùng chung nhiều

// Loại bỏ trùng lắp
function cleanAllBook(all_book) {
    var all_book_cleaned = [];
    var all_book_id = Array.from(new Set(all_book.map(x => x.id)));
    for (var b of all_book) {
        // if (all_book_id.includes(b.id) && b.id_borrower == "") { // Cái này nếu như muốn chỉ in ra availble book 
        if (all_book_id.includes(b.id)) {
            all_book_cleaned.push(b)
            const index = all_book_id.indexOf(b.id);
            if (index > -1) {
                all_book_id.splice(index, 1);
            }
        }
    }
    return all_book_cleaned
}

// Tìm sách availble, hàm này giả sử tồn tại sách, bởi vì nếu không có sách thì bị hiển thị "hết sách" ở trang trước rồi.
function findAvailableBook(all_book, book_id) { 
    for (var b of all_book) {
        if (b.id == book_id && b.id_borrower == '') { 
            console.log(b)
            return b._id.toString()
        }
    }

}

module.exports = {
    cleanAllBook, 
    findAvailableBook,
}