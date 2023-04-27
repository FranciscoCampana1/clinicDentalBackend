var express = require('express');
const userController = require('../controllers/userControllers');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken')
const isAdmin = require('../middleware/isAdmin')


//RUTA PARA QUE EL ADMIN PUEDA VISUALIZAR A TODOS LOS USUARIOS DE LA APLICACIÓN
router.get('/', verifyToken, isAdmin, userController.getAll);

//RUTA PARA QUE LOS USUARIOS PUEDAN VER SU PERFIL
router.get('/getprofile', verifyToken, userController.getProfile);

//RUTA PARA QUE LOS USUARIOS PUEDAN MODIFICAR SU PERFIL
router.put('/updateprofile', verifyToken, userController.updateProfile);




module.exports = router;