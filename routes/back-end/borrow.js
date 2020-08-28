const router = require("express").Router();
const scheduleService = require("../../services/schedule");
const bookService = require("../../services/book");

router.get("/borrow/accept", async (req, res, next) => {
    await scheduleService.borrowByIds(req.query.id.split(','));
    res.redirect('back')
})

router.get("/borrow/return", async (req, res, next) => {
    ids = req.query.id.split(',')
    await scheduleService.returnByIds(ids);
    books = (await scheduleService.getBookIdByIds(ids))
    await bookService.returnIds(books);
    res.redirect('back')
})

router.get("/borrow/lost", async (req, res, next) => {
    await scheduleService.lostByIds(req.query.id.split(','));
    res.redirect('back')
})

router.get("/borrow/cancel", async (req, res, next) => {
    ids = req.query.id.split(',')
    await scheduleService.cancelByIds(ids);
    books = await scheduleService.getBookIdByIds(ids)
    await bookService.returnIds(books);
    res.redirect('back')
})

module.exports = router;