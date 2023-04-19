var express = require("express");
const citaController = require('../controllers/citaController')
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");

/* GET users listing. */
router.post("/createcita", verifyToken, citaController.createCita);

module.exports = router;
