const newsService = require("../services/news");
const config = require("../config")

const dateTimeService = require("./../utils/dateTime")

async function insert(req, res) {
    try {
        let object = {};
        for (i in req.body) {
            object[req.body[i].name] = req.body[i].value
        }
        const { title, desc, tag, writer, type } = object;
        const newNewsDocument = newsService.createModel(title, desc, tag, writer, type);
        await newsService.insert(newNewsDocument);
        return res.status(200).send({ News: newNewsDocument });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error });
    }
}

async function removeById(req, res) {
    try {
        const { _id } = req.body;
        await newsService.removeById(_id)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getById(req, res) {
    try {
        const { _id } = req.body;
        const NewsDocument = await newsService.getById(_id);
        return res.status(200).send({ result: NewsDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function updateById(req, res) {
    try {
        const { _id, title, content, tag, writer, type } = req.body;
        await newsService.updateById(_id, title, content, tag, writer, type)
        return res.status(200).send({ message: config.STATUS_200_OK })
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}


async function getAll(req, res) {
    try {
        const NewsDocument = await newsService.getAll();
        return res.status(200).send({ result: NewsDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function get3BylatestDate(req, res) {
    try {
        const EventDocument = await newsService.get3EventByLatestDate();
        const PronouncerDocument = await newsService.get3PronouncerByLatestDate();

        const sectionSuKien = {
            title: "Sự kiện",
            other_news: "Các tin khác",
            more_news: "→ xem tất cả sự kiện",
            articles: EventDocument
        }

        for (i in sectionSuKien.articles) {
            // console.log(sectionSuKien.articles[i].image_url);
            sectionSuKien.articles[i].date = dateTimeService.dateToNiceString(new Date());
            sectionSuKien.articles[i].image_url = "/images/alert-late-thumbnail.png"
        }

        const sectionThongBao = {
            title: "Thông báo",
            other_news: "Các tin khác",
            more_news: "→ xem tất cả thông báo",
            articles: PronouncerDocument
        }

        for (i in sectionThongBao.articles) {
            // console.log(sectionSuKien.articles[i].image_url);
            sectionThongBao.articles[i].date = dateTimeService.dateToNiceString(new Date());
            sectionThongBao.articles[i].image_url = "/images/news-thumbnail.png"
        }
        res.render(
            'news', {
                layout: "layout",
                title: 'Trang Tin Tức',
                sectionSuKien,
                sectionThongBao
            }
        )

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error });
    }
}


async function get5NewsByLatestDate() {
    try {
        const NewsDocument = await newsService.get5NewsByLatestDate();

        const sectionTinTuc = {
            title: "Sự kiện",
            other_news: "Các tin khác",
            more_news: "→ xem tất cả sự kiện",
            articles: NewsDocument
        }

        for (i in sectionTinTuc.articles) {
            sectionTinTuc.articles[i].date = dateTimeService.dateToNiceString(new Date());
            if (sectionTinTuc.articles[i].type == 1) {
                sectionTinTuc.articles[i].image_url = "/images/alert-late-thumbnail.png"
            } else {
                sectionTinTuc.articles[i].image_url = "/images/news-thumbnail.png"
            }
        }
        return sectionTinTuc

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    insert: insert,
    updateById: updateById,
    removeById: removeById,
    getById: getById,
    getAll: getAll,
    get5NewsByLatestDate: get5NewsByLatestDate,
    get3BylatestDate: get3BylatestDate
}