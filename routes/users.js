var express = require('express');
const authController = require('../controllers/authController');
var router = express.Router();

/* GET users listing. */
router.get('/', authController.getAll);
router.post('/register', authController.register);
router.post('/login', authController.login);


module.exports = router;
