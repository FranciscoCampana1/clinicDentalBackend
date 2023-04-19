const citaController = {};
const { Usuario, Paciente, Odontologo, Cita } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getPagesFromCountLimit, normalizePage } = require("../_util/util");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");
const {compareHash, hash} = require("../_util/hash");
const {generateToken} = require("../_util/token");
const { where, Model } = require("sequelize");



// CREAR CITA COMO PACIENTE
citaController.createCita = async (req, res) => {
  try {
    const { fecha, horario, id_odontologo } = req.body;
    const paciente = await Paciente.findOne({where: {id_usuario: req.usuario_id}})
    const nuevaCita = await Cita.create({
      id_odontologo: id_odontologo,
      id_paciente: paciente.id,
      fecha: fecha,
      horario: horario,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    const odontologo = await Odontologo.findByPk(nuevaCita.id_odontologo, {
      attributes: {
        exclude: ["id", "id_usuario","matriculaOdontologo", "createdAt", "updatedAt"],
      },
      include: {
        model: Usuario,
        attributes: {
          include: [
            "nombre",
            "apellidos"
          ],
        },
      },
    });
    return sendSuccsessResponse(res, 200, [
      { message: "Cita creada" },
      odontologo , nuevaCita
    ]);
  } catch (error) {
    return sendErrorResponse(res, 500, "No se puede crear la cita", error);
  }
};


// // BORRAR CITA COMO PACIENTE
citaController.deleteCita = async (req, res) => {
  try {
    const id_cita = req.params.id;
    const deleteCita = await Citas.destroy({
      where: { id: id_cita, id_paciente: req.id_paciente },
    });
    return res.json({
      success: true,
      message: "Cita eliminada",
      data: deleteCita,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error.message,
    });
  }
};

// // ACTUALIZAR CITA COMO PACIENTE
// appointmentController.updateAppointment = async (req, res) => {
//   try {
//     const appointmentId = req.params.id;
//     const date = req.body.date;
//     const hour = req.body.hour;
//     const price = req.body.price;
//     const about = req.body.about;
//     const updateAppointment = await Citas.update(
//       { date: date, hour: hour, price: price, about: about },
//       { where: { id: appointmentId, client_id: req.clientId } }
//     );
//     return res.json({
//       success: true,
//       message: "Appointment updated",
//       data: updateAppointment,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "something went wrong",
//       error: error.message,
//     });
//   }
// };



module.exports = citaController;