const producerController = require("./../../controllers/producer")
const router = require('express').Router()

module.exports = () => {
    router.post("/producer/insert", producerController.insert);
    router.post("/producer/update-by-id", producerController.updateById);
    router.delete("/producer/remove-by-id", producerController.removeById);
    router.get("/producer/get-by-id", producerController.getById);
    router.get("/producer/get-by-name", producerController.getManyByName);
    router.get("/producer/get-all", producerController.getAll);
    return router;
}