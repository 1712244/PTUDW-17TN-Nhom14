const disciplinesService = require("./../services/disciplines");
const { log } = require("debug");

const config = require("./../config")


async function insert(req, res) {
    try {
        const { name } = req.body;
        const newdisciplinesDocument = disciplinesService.createModel(name);
        await disciplinesService.insert(newdisciplinesDocument);
        return res.status(200).send({ disciplines: newdisciplinesDocument });
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error });
    }
}


async function updateById(req, res) {
    try {
        const { _id, name } = req.body;
        await disciplinesService.updateById(_id, name)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
}

async function removeById(req, res) {
    try {
        const { _id } = req.body;
        await disciplinesService.removeById(_id)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getById(req, res) {
    try {
        const { _id } = req.body;
        const disciplinesDocument = await disciplinesService.getById(_id);
        return res.status(200).send({ result: disciplinesDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByName(req, res) {
    try {
        const { name } = req.body;
        const disciplinesDocument = await disciplinesService.getManyByName(name);
        return res.status(200).send({ result: disciplinesDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getAll(req, res) {
    try {
        const disciplinesDocument = await disciplinesService.getAll();
        return res.status(200).send({ result: disciplinesDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getAllName(req, res) {
    try {
        const disciplinesDocument = await disciplinesService.getAllName();
        return res.status(200).send({ result: disciplinesDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}


module.exports = {
    insert: insert,
    updateById: updateById,
    removeById: removeById,
    getById: getById,
    getManyByName: getManyByName,
    getAll: getAll,
    getAllName:getAllName,
}