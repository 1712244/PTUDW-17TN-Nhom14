const newsController = require("./../../controllers/news")
const router = require("express").Router()

module.exports = () => {
    router.post("/news/insert", newsController.insert);
    router.post("/news/update-by-id", newsController.updateById);
    router.delete("/news/remove-by-id", newsController.removeById);
    router.get("/news/get-by-id", newsController.getById);
    router.get("/news/get-all", newsController.getAll);
    router.get("/news/get-3-latest-date", newsController.get3BylatestDate)
    return router;
}