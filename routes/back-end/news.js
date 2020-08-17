const newsController = require("./../../controllers/news")
const router = require("express").Router()

module.exports = () => {
    router.post("/news/insert", newsController.insert);
    router.post("/news/update", newsController.updateById);
    router.delete("/news/remove-by-id", newsController.removeById);
    router.get("/news/get-by-id", newsController.getById);
    return router;
}