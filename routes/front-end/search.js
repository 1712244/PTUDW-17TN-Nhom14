var express = require('express');
var router = express.Router();

const searchControllers = require('./../../controllers/search');


/* GET users listing. */
router.get('/', searchControllers.searchDefault);
router.get('/:text', searchControllers.searchQuery);
router.post('/:text', searchControllers.postSearch);
router.post('/', searchControllers.postSearch);

module.exports = router;