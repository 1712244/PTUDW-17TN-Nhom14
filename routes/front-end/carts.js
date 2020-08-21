var express = require('express');
var router = express.Router();
const cartsControllers = require('./../../controllers/carts');



router.get('/', cartsControllers.getCart);
router.get('/abort', cartsControllers.abortCart);
router.get('/accept', cartsControllers.acceptCart);




module.exports = router;
