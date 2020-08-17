const newsService = require("../services/news");
const config = require("../config")



async function insert(req, res) {
    try {
        const { title, content, tag, writer } = req.body;
        const newNewsDocument = userService.createModel(title, content, tag, writer);
        await newsService.insert(newNewsDocument);
        return res.status(200).send({ News: newNewsDocument });
    } catch (error) {
        res.status(500).send({ message: error });
    }
}

async function removeById(req, res) {
    try {
        const { _id } = req.body;
        await newsService.removeById(author_id)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getById(req, res) {
    try {
        const { _id } = req.body;
        const NewsDocument = await newsService.getById(author_id);
        return res.status(200).send({ result: NewsDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function updateById(req, res) {
    try {
        const { _id, title, content, tag, writer } = req.body;
        await newsService.updateById(_id, title, content, tag, writer)
        return res.status(200).send({ message: config.STATUS_200_OK })
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

module.exports = {
    insert: insert,
    updateById: updateById,
    removeById: removeById,
    getById: getById
}