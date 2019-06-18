let express = require('express');
let router = express.Router();
let controllers = require("../controllers/index");

/* GET home page. */
router.get('/', controllers.home);
router.get('/waffles', controllers.waffles);
router.get('/waffle/:id', controllers.waffle);

module.exports = router;
