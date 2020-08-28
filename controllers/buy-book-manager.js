const buyRegistedService = require("../services/buy-registed");
const dateTimeService = require("./../utils/dateTime")
async function getData(req, res) {
    try {

        let BuyRegistedStatus0Document = [];
        let BuyRegistedStatus1Document = [];
        if (!res.locals.user) {
            let Booking_arr = {
                booking_book: BuyRegistedStatus0Document
            }
            let Bought_arr = {
                bought_book: BuyRegistedStatus1Document
            }
            res.render('buy-book-manager', { layout: "layout", Booking_arr, Bought_arr });
            return null;
        }
        let BuyRegistedUser = await buyRegistedService.getManyByUserId(res.locals.user.user.id)

        BuyRegistedUser = JSON.parse(JSON.stringify(BuyRegistedUser));
        for (i in BuyRegistedUser) {
            if (BuyRegistedUser[i].status == 0)
                BuyRegistedStatus0Document.push(BuyRegistedUser[i]);
            if (BuyRegistedUser[i].status == 1)
                BuyRegistedStatus1Document.push(BuyRegistedUser[i]);
        }
        for (i in BuyRegistedStatus0Document) {
            BuyRegistedStatus0Document[i].date_registed = dateTimeService.DateToDMY(new Date(BuyRegistedStatus0Document[i].date_registed));
        }
        for (i in BuyRegistedStatus1Document) {
            BuyRegistedStatus1Document[i].date_registed = dateTimeService.DateToDMY(new Date(BuyRegistedStatus0Document[i].date_registed));
        }
        let Booking_arr = {
            booking_book: BuyRegistedStatus0Document
        }
        let Bought_arr = {
            bought_book: BuyRegistedStatus1Document
        }
        res.render('buy-book-manager', { layout: "layout", Booking_arr, Bought_arr });

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getData: getData
}