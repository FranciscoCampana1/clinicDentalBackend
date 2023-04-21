const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const isAdmin = require("../middleware/isAdmin");
const verifyToken = require("../middleware/verifyToken");

router.post("/register", authController.register);
router.post("/register/odontologo", verifyToken, isAdmin ,authController.registerOdontologo);
router.post("/login", authController.login);

module.exports = router;
