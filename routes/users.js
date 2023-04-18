var express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken')
const isAdmin = require('../middleware/isAdmin')



/* GET users listing. */

router.get('/', verifyToken, isAdmin, authController.getAll);
router.get('/getProfile', verifyToken, authController.getProfile);




module.exports = router;