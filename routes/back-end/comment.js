const commentController = require("./../../controllers/comment");
const router = require("express").Router();

module.exports = () => {
    router.post("/comment/insert", commentController.insert);
    router.post("/comment/post", commentController.postRate);
    router.post("/comment/update-by-id", commentController.updateById);
    router.delete("/comment/remove-by-id", commentController.removeById);
    router.get("/comment/get-by-id", commentController.getById);
    router.get("/comment/get-all", commentController.getAll);
    router.get("/comment/get-by-attribute", commentController.getbyAttribute);
    return router;
}