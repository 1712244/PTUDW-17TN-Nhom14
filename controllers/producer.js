const producerService = require("./../services/producer")

async function insert(req, res) {
    try {
        const { name } = req.body;
        const newProducerDocument = userService.createModel(producer_id, name);
        await producerService.insert(newProducerDocument);
        return res.status(200).send({ producer: newProducerDocument });
    } catch (error) {
        res.status(500).send({ message: error });
    }
}


async function updateById(req, res) {
    try {
        const { _id, name } = req.body;
        await producerService.updateById(producer_id, name)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function removeById(req, res) {
    try {
        const { _id } = req.body;
        await producerService.removeById(producer_id)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getById(req, res) {
    try {
        const { _id } = req.body;
        const producerDocument = await producerService.getById(producer_id);
        return res.status(200).send({ result: producerDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByName(req, res) {
    try {
        const { name } = req.body;
        const producerDocument = await producerService.getManyByName(name);
        return res.status(200).send({ result: producerDocument });
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