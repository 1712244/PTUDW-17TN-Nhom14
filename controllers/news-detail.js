const newsService = require("../services/news");


async function getById(req, res, next) {
    try {
        const _id = req.params.id;
        console.log(_id);
        const newsDocument = await newsService.getById(_id);
        // console.log(newsDocument);
        if (newsDocument.type == 0) {
            newsDocument.article_image = "/images/news-thumbnail.png"
        }
        if (newsDocument.type == 1) {
            newsDocument.article_image = '/images/alert-late-thumbnail.png'
        }

        res.render('news-detail', {
            layout: "layout",
            newsDocument
        })

        // return res.status(200).send({ result: "OK" })
    } catch (error) {
        // console.log(error);
        // return res.status(500).send({ result: error })
    }

}

module.exports = {
    getById: getById
}