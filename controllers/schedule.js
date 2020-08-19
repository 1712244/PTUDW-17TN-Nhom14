const scheduleService = require("./../services/schedule")
const config = require("./../config")

async function insert(req, res) {
    try {
        const { book_id, user_id, rent_date, back_date, location, status } = req.body;
        const newScheduleDocument = scheduleService.createModel(book_id, user_id, rent_date, back_date, location, status);
        await scheduleService.insert(newScheduleDocument);
        return res.status(200).send({ result: newScheduleDocument })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error })
    }
}

async function getAll(req, res) {
    try {
        const scheduleDocument = await scheduleService.getAll();
        return res.status(200).send({ result: scheduleDocument });
    } catch (error) {
        return res.send(500).send({ message: error });
    }
}

async function getById(req, res) {
    try {
        const { _id } = req.body;
        const scheduleDocument = await scheduleService.getById(_id);
        return res.status(200).send({ result: scheduleDocument })
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByUserId(req, res) {
    try {
        const { user_id } = req.body;
        const scheduleDocument = await scheduleService.getManyByUserId(user_id);
        return res.status(200).send({ result: scheduleDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByBookId(req, res) {
    try {
        const { book_id } = req.body;
        const scheduleDocument = await scheduleService.getManyByBookId(book_id);
        return res.status(200).send({ result: scheduleDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByRentDate(req, res) {
    try {
        const { rent_date } = req.body;
        const scheduleDocument = await scheduleService.getManyByRentDate(rent_date);
        return res.status(200).send({ result: scheduleDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByBackDate(req, res) {
    try {
        const { back_date } = req.body;
        const scheduleDocument = await scheduleService.getManyByBackDate(back_date);
        return res.status(200).send({ result: scheduleDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getManyByLocation(req, res) {
    try {
        const { location } = req.body;
        const scheduleDocument = await scheduleService.getManyByLocation(location);
        return res.status(200).send({ result: scheduleDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function removeById(req, res) {
    try {
        const { _id } = req.body;
        await scheduleService.removeById(_id);
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function updateById(req, res) {
    try {
        const { _id, book_id, user_id, rent_date, back_date, location, status } = req.body;
        await scheduleService.updateById(_id, book_id, user_id, rent_date, back_date, location, status)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

module.exports = {
    insert: insert,
    getAll: getAll,
    getById: getById,
    getManyByBookId: getManyByBookId,
    getManyByUserId: getManyByUserId,
    getManyByRentDate: getManyByRentDate,
    getManyByBackDate: getManyByBackDate,
    getManyByLocation: getManyByLocation,
    removeById: removeById,
    updateById: updateById
}