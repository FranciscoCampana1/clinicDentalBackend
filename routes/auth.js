const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const isAdmin = require("../middleware/isAdmin");
const verifyToken = require("../middleware/verifyToken");

//RUTA PARA REGISTRARSE COMO USUARIO
router.post("/register", authController.register);

//RUTA PARA QUE EL ADMIN REGISTRE A UN ODONTOLOGO
router.post("/register/odontologo", verifyToken, isAdmin ,authController.registerOdontologo);

//RUTA PARA QUE LOS USUARIOS PUEDAN LOGEARSE
router.post("/login", authController.login);



module.exports = router;
