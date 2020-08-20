const bookService = require('./../services/book');
const { log } = require('debug');
 
async function insert(req, res) {
    try {
        const { ISBN, name, author, reprint, producer, desc, tag, borrower_id, image_url, bought_date, price } = req.body;
        const newBookDocument = bookService.createModel(ISBN, name, author, reprint, producer, desc, tag, borrower_id, image_url, bought_date, price);
        await bookService.insert(newBookDocument);
        return res.status(200).send({ book: newBookDocument });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error });
    }
}

async function updateById(req, res) {
    try {
        const { _id, ISBN, author, reprint, producer, desc, tag, borrower_id, image_url, bought_date, price } = req.body;
        await bookService.updateById(_id, ISBN, name, author, reprint, producer, desc, tag, borrower_id, image_url, bought_date, price)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function updateByISBN(req, res) {
    try {
        const { ISBN, author, reprint, producer, desc, tag, borrower_id, image_url } = req.body;
        await bookService.updateByISBN(ISBN, name, author, reprint, producer, desc, tag, borrower_id, image_url, bought_date, price)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function removeById(req, res) {
    try {
        const { _id } = req.body;
        await bookService.removeById(_id)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function removeByISBN(req, res) {
    try {
        const { ISBN } = req.body;
        await bookService.removeByISBN(ISBN)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getById(req, res) {
    try {
        const { _id } = req.body;
        const bookDocument = await bookService.getById(_id);
        return res.status(200).send({ result: bookDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getByISBN(req, res) {
    try {
        const { ISBN } = req.body;
        const bookDocument = await bookService.getByISBN(ISBN);
        return res.status(200).send({ result: bookDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByName(req, res) {
    try {
        const { name } = req.body;
        const bookDocument = await bookService.getManyByName(name);
        return res.status(200).send({ result: bookDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByAuthor(req, res) {
    try {
        const { author } = req.body;
        const bookDocument = await bookService.getManyByAuthor(author);
        return res.status(200).send({ result: bookDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByProducer(req, res) {
    try {
        const { producer } = req.body;
        const bookDocument = await bookService.getManyByProducer(producer);
        return res.status(200).send({ result: bookDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByTag(req, res) {
    try {
        const { tag } = req.body;
        const bookDocument = await bookService.getManyByProducer(tag);
        return res.status(200).send({ result: bookDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getAll(req, res) {
    try {
        const {} = req.body;
        const bookDocument = await bookService.getAll();
        return res.status(200).send({ result: bookDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getByAttribute(req, res) {
    try {
        // const obj = req.body;
        const { tag, name } = req.body;
        const bookDocument = await bookService.getByAttribute(tag, [], name);
        return res.status(200).send({ result: bookDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

module.exports = {
    insert: insert,
    getManyByName: getManyByName,
    getManyByAuthor: getManyByAuthor,
    getManyByProducer: getManyByProducer,
    getById: getById,
    getByISBN: getByISBN,
    getManyByTag: getManyByTag,
    getAll: getAll,
    getByAttribute: getByAttribute,
    updateById: updateById,
    updateByISBN: updateByISBN,
    removeById: removeById,
    removeByISBN: removeByISBN
}