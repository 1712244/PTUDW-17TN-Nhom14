const commentService = require("./../services/comment")

async function insert(req, res) {
    try {
        const { user_id, book_ISBN, content, rating } = req.body;
        const newCommentDocument = commentService.createModel(user_id, book_ISBN, content, rating);
        await commentService.insert(newCommentDocument);
        return res.status(200).send({ result: newCommentDocument });
    } catch (error) {
        res.status(500).send({ message: error });
    }
}

async function updateById(req, res) {
    try {
        const { _id, user_id, book_ISBN, content, rating } = req.body;
        await commentService.updateById(_id, content, rating)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function removeById(req, res) {
    try {
        const { _id } = req.body;
        await commentService.removeById(_id)
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getById(req, res) {
    try {
        const { _id } = req.body;
        const commentDocument = await commentService.getById(_id)
        return res.status(200).send({ result: commentDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getAll(req, res) {
    try {
        const commentDocument = await commentService.getAll()
        return res.status(200).send({ result: commentDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function getbyAttribute(req, res) {
    try {
        const obj = req.body;
        const commentDocument = await commentService.getByAttribute(obj)
        return res.status(200).send({ result: commentDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function postRate(req, res, next) {
    var data = req.body
    var comment = {
        user_id: res.locals.user.id,
        book_id : data.book_id,
        content : data.content, 
        rate: data.rate
    }
    await commentService.insertCommentJSON(comment)
    res.redirect('/book-detail/'+data.book_objid);
}

module.exports = {
    insert: insert,
    updateById: updateById,
    getById: getById,
    getbyAttribute: getbyAttribute,
    getAll: getAll,
    removeById: removeById, 
    postRate
}