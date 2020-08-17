const authorController = require("./../../controllers/author")
const router = require('express').Router()

module.exports = () => {
    router.post("/author/insert", authorController.insert);
    router.post("/author/update-by-id", authorController.updateById);
    router.delete("/author/remove-by-id", authorController.removeById);
    router.get("/author/get-by-id", authorController.getById);
    router.get("/author/get-by-name", authorController.getManyByName);
    return router;
}