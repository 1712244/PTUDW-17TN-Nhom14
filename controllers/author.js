const authorService = require("./../services/author");;
const config = require("./../config")


async function insert(req, res) {
    try {
        const { name } = req.body;
        const newAuthorDocument = authorService.createModel(name);
        console.log(newAuthorDocument);
        await authorService.insert(newAuthorDocument);
        return res.status(200).send({ author: newAuthorDocument });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error });
    }
}


async function updateById(req, res) {
    try {
        const { _id, name } = req.body;
        await authorService.updateById(_id, name)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function removeById(req, res) {
    try {
        const { _id } = req.body;
        await authorService.removeById(_id)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getById(req, res) {
    try {
        const { _id } = req.body;
        const authorDocument = await authorService.getById(_id);
        return res.status(200).send({ result: authorDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByName(req, res) {
    try {
        const { name } = req.body;
        const authorDocument = await authorService.getManyByName(name);
        return res.status(200).send({ result: authorDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

module.exports = {
    insert: insert,
    updateById: updateById,
    removeById: removeById,
    getById: getById,
    getManyByName: getManyByName
}