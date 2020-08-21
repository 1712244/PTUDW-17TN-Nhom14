var express = require('express');
var router = express.Router();
const cartDetailControllers = require('./../../controllers/cartDetail');
const { route } = require('./carts');

 

router.get('/:id', cartDetailControllers.getCart);
router.post('/:id', cartDetailControllers.postCartDetail)



module.exports = router;
