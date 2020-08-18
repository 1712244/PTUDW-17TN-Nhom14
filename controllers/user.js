const userService = require('./../services/user');
const config = require('../config')

async function insert(req, res) {
    try {
        const { user_id, name, email, sdt, type } = req.body;
        const newUserDocument = userService.createModel(user_id, name, email, sdt, type);
        await userService.insert(newUserDocument);
        return res.status(200).send({ user: newUserDocument });
    } catch (error) {
        res.status(500).send({ message: error });
    }
}

async function updateById(req, res) {
    try {
        const { user_id, name, email, sdt } = req.body;
        await userService.updateById(user_id, name, email, sdt)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function removeById(req, res) {
    try {
        const { user_id } = req.body;
        await userService.removeById(user_id)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getById(req, res) {
    try {
        const { user_id } = req.body;
        const userDocument = await userService.getById(user_id);
        return res.status(200).send({ result: userDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByName(req, res) {
    try {
        const { name } = req.body;
        const userDocument = await userService.getManyByName(name);
        return res.status(200).send({ result: userDocument });
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

async function getAll(req, res) {
    try {
        const userDocument = await userService.getAll();
        return res.status(200).send({ result: userDocument });
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

module.exports = {
    insert: insert,
    updateById: updateById,
    removeById: removeById,
    getById: getById,
    getManyByName: getManyByName,
    getAll: getAll
}