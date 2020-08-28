const router = require("express").Router();
const scheduleService = require("../../services/schedule");
const bookService = require("../../services/book");

router.get("/borrow/accept", async (req, res, next) => {
    await scheduleService.borrowByIds(req.query.id);
    res.redirect('back')
})

router.get("/borrow/return", async (req, res, next) => {
    await scheduleService.returnByIds(req.query.id);
    await bookService.returnIds(req.query.id);
    res.redirect('back')
})

router.get("/borrow/lost", async (req, res, next) => {
    await scheduleService.lostByIds(req.query.id);
    res.redirect('back')
})

router.get("/borrow/cancel", async (req, res, next) => {
    await scheduleService.cancelByIds(req.query.id);
    await bookService.returnIds(req.query.id);
    res.redirect('back')
})

module.exports = router;