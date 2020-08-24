const scheduleController = require("./../../controllers/schedule");
const router = require("express").Router();

module.exports = () => {
    router.post("/schedule/add-new", scheduleController.insert);
    router.post("/schedule/update-by-id", scheduleController.updateById);
    router.delete("/schedule/remove-by-id", scheduleController.removeById);
    router.get("/schedule/get-all", scheduleController.getAll);
    router.get("/schedule/get-by-id", scheduleController.getAll);
    router.get("/schedule/get-many-by-userid", scheduleController.getManyByUserId);
    router.get("/schedule/get-many-by-bookid", scheduleController.getManyByBookId);
    router.get("/schedule/get-many-by-rentdate", scheduleController.getManyByRentDate);
    router.get("/schedule/get-many-by-back-date", scheduleController.getManyByDueDate);
    router.get("/schedule/get-many-by-location", scheduleController.getManyByLocation);

    return router
}