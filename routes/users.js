var express = require('express');
const userController = require('../controllers/userControllers');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken')
const isAdmin = require('../middleware/isAdmin')



router.get('/', verifyToken, isAdmin, userController.getAll);
router.get('/getprofile', verifyToken, userController.getProfile);
router.put('/updateprofile', verifyToken, userController.updateProfile);




module.exports = router;