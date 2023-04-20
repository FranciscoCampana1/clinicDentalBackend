var express = require("express");
const citaController = require('../controllers/citaController')
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");

/* GET users listing. */
router.post("/createcita", verifyToken, citaController.createCita);

router.delete('/deletecita/:id', verifyToken, citaController.deleteCita);
router.put('/updatecita/:id', verifyToken, citaController.updateCita);
router.get('/cita', verifyToken, citaController.getCitas);
router.get('/cita/odontologo', verifyToken, citaController.getCitasOdontologo);

module.exports = router;
