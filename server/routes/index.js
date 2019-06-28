let express = require('express');
let router = express.Router();
let controllers = require("../controllers/index");

/* GET home page. */
router.get('/', controllers.home);
router.get('/waffles', controllers.waffles);
router.get('/waffle/:id', controllers.waffle);
router.post('/add_cart', controllers.addCart);
router.post('/update_cart', controllers.updateCart);
router.post('/signup', controllers.signup);
router.post('/login', controllers.login);
router.post('/logout', controllers.logout);
router.get('/fetch_cart', controllers.fetchCart);

module.exports = router;
