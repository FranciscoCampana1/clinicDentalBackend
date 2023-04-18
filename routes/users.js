var express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const isVerifyToken = require('../middleware/verifyToken')

/* GET users listing. */
router.get('/', authController.getAll);
router.post('/register', authController.register);
router.post('/login',authController.login);


module.exports = router;
