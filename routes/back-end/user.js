const router = require('express').Router();
const userController = require('./../../controllers/user');

module.exports = () => {
    router.post("/user/insert", userController.insert);
    router.post("/user/update", userController.updateById);
    router.delete("/user/delete", userController.removeById);
    router.get("/user/get-one-by-id", userController.getById);
    router.get("/user/get-many-by-name", userController.getManyByName);
    return router
}