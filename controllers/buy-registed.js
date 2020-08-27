const buyRegistedService = require("../services/buy-registed");

async function insert(req, res) {
    try {
        const { user_id, book_name, book_isbn, reprint, author, producer, date_registed } = req.body;
        const newBuyRegistedDocument = buyRegistedService.createModel(user_id, book_isbn, book_name, reprint, author, producer, date_registed);
        await buyRegistedService.insert(newBuyRegistedDocument);
        return res.status(200).send({ result: newBuyRegistedDocument });
    } catch (error) {
        res.status(500).send({ message: error });
    }
}

async function updateById(req, res) {
    try {
        const { _id, user_id, book_name, reprint, author, producer, date_registed } = req.body;
        await buyRegistedService.updateById(_id, user_id, book_isbn, book_name, reprint, author, producer, date_registed)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function removeById(req, res) {
    try {
        const { _id } = req.body;
        await buyRegistedService.removeById(_id)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getById(req, res) {
    try {
        const { _id } = req.body;
        const BuyRegistedDocument = await buyRegistedService.getById(_id)
        return res.status(200).send({ result: BuyRegistedDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getAll(req, res) {
    try {
        const BuyRegistedDocument = await buyRegistedService.getAll()
        return res.status(200).send({ result: BuyRegistedDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getByStatus(req, res) {
    try {
        const { status } = req.body
        const BuyRegistedDocument = await buyRegistedService.getByStatus(status)
        return res.status(200).send({ result: BuyRegistedDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByProducer(req, res) {
    try {
        const { producer } = req.body;
        const BuyRegistedDocument = await buyRegistedService.getManyByProducer(producer)
        return res.status(200).send({ result: BuyRegistedDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByBookName(req, res) {
    try {
        const { book_name } = req.body;
        const BuyRegistedDocument = await buyRegistedService.getManyByBookName(book_name)
        return res.status(200).send({ result: BuyRegistedDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByUserId(req, res) {
    try {
        const { user_id } = req.body;
        const BuyRegistedDocument = await buyRegistedService.getManyByUserId(user_id)
        return res.status(200).send({ result: BuyRegistedDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}


async function getManyByRegistDate(req, res) {
    try {
        const { date_registed } = req.body;
        const BuyRegistedDocument = await buyRegistedService.getManyByRegistDate(date_registed)
        return res.status(200).send({ result: BuyRegistedDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

module.exports = {
    insert: insert,
    getById: getById,
    getManyByProducer: getManyByProducer,
    getManyByBookName: getManyByBookName,
    getManyByUserId: getManyByUserId,
    getManyByRegistDate: getManyByRegistDate,
    getAll: getAll,
    removeById: removeById,
    updateById: updateById,
    getByStatus: getByStatus
}