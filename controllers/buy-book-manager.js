const buyRegistedService = require("../services/buy-registed");
const dateTimeService = require("./../utils/dateTime")
async function getData(req, res) {
    try {
        let BuyRegistedStatus0Document = await buyRegistedService.getByStatus(0);
        let BuyRegistedStatus1Document = await buyRegistedService.getByStatus(1);

        BuyRegistedStatus0Document = JSON.parse(JSON.stringify(BuyRegistedStatus0Document));
        BuyRegistedStatus1Document = JSON.parse(JSON.stringify(BuyRegistedStatus1Document));

        for (i in BuyRegistedStatus0Document) {
            // console.log(BuyRegistedStatus0Document[i]);
            BuyRegistedStatus0Document[i]['date_registed'] = dateTimeService.DateToDMY(new Date(BuyRegistedStatus0Document[i].date_registed));
        }
        for (i in BuyRegistedStatus1Document) {
            BuyRegistedStatus1Document[i].date_registed = dateTimeService.DateToDMY(new Date(BuyRegistedStatus0Document[i].date_registed));
            // console.log(BuyRegistedStatus0Document[i]);
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