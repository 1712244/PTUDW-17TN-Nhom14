const buyRegistedController = require("./../../controllers/buy-registed");
const { mode } = require("crypto-js");
const router = require("express").Router();

module.exports = () => {
    router.post("/buy-registed/insert", buyRegistedController.insert);
    router.post("/buy-registed/update-by-id", buyRegistedController.updateById);
    router.delete("/buy-registed/remove-by-id", buyRegistedController.removeById);
    router.get("/buy-registed/get-by-id", buyRegistedController.getById);
    router.get("/buy-registed/get-all", buyRegistedController.getAll);
    router.get("/buy-registed/get-by-book-name", buyRegistedController.getManyByBookName);
    router.get("/buy-registed/get-by-producer", buyRegistedController.getManyByProducer);
    router.get("/buy-registed/get-by-regist-date", buyRegistedController.getManyByRegistDate);
    router.get("/buy-registed/get-by-userid", buyRegistedController.getManyByUserId);
    router.get("/buy-registed/get-by-status", buyRegistedController.getByStatus);
    return router;
}