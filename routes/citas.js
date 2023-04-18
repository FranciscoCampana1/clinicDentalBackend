var express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken')
const isAdmin = require('../middleware/isAdmin')



/* GET users listing. */
router.delete('/deleteCita', verifyToken, authController.deleteCita)





module.exports = router;