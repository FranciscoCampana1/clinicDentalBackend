var express = require("express");
const citaController = require('../controllers/citaController')
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");
const isPatient = require("../middleware/isPatient");

/* GET users listing. */
router.post("/createcita", verifyToken, isPatient, citaController.createCita);

router.delete('/deletecita/:id', verifyToken,isPatient, citaController.deleteCita);

router.put('/updatecita/:id', verifyToken, isPatient, citaController.updateCita);

router.get('/cita', verifyToken, citaController.getCitas);

router.get('/cita/odontologo', verifyToken, isAdmin, citaController.getCitasOdontologo);

module.exports = router;
