var express = require("express");
const citaController = require('../controllers/citaController')
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isDoctor = require('../middleware/isDoctor')
const isPatient = require("../middleware/isPatient");


//RUTA PARA CREAR CITAS
router.post("/createcita", verifyToken, isPatient, citaController.createCita);

//RUTA PARA BORRAR CITAS
router.delete('/deletecita/:id', verifyToken,isPatient, citaController.deleteCita);

//RUTA PARA MODIFICAR CITAS
router.put('/updatecita/:id', verifyToken, isPatient, citaController.updateCita);

//RUTA PARA VISUALIZAR CITAS PROPIAS COMO PACIENTE
router.get('/cita', verifyToken, isPatient, citaController.getCitas);

//RUTA PARA VISUALIZAR CITAS PROPIAS COMO ODONTOLOGO
router.get('/cita/odontologo', verifyToken, isDoctor , citaController.getCitasOdontologo);


module.exports = router;
