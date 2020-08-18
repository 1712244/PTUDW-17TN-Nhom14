const bookController = require('./../../controllers/book');
const router = require('express').Router()

module.exports = () => {
    router.post("/book/add-new", bookController.insert);
    router.post("/book/update-by-id", bookController.updateById);
    router.post("/book/update-by-isbn", bookController.updateByISBN);
    router.delete("/book/remove-by-id", bookController.removeById);
    router.delete("/book/remove-by-isbn", bookController.removeByISBN);
    router.get("/book/get-by-id", bookController.getById);
    router.get("/book/get-by-ISBN", bookController.getByISBN);
    router.get("/book/get-by-name", bookController.getManyByName);
    router.get("/book/get-by-author", bookController.getManyByAuthor);
    router.get("/book/get-by-poducer", bookController.getManyByProducer);
    router.get("/book/get-all", bookController.getAll);
    router.get("/book/get-by-attribute", bookController.getByAttribute);
    return router;
}