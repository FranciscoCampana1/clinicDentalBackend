const citaController = {};
const { Usuario, Paciente, Odontologo, Cita } = require("../models");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");


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
    const paciente = await Paciente.findOne({where: {id_usuario: req.usuario_id}})
    const deleteCita = await Cita.destroy({
      where: { id: id_cita, id_paciente: paciente.id },
    });
    return sendSuccsessResponse(res, 200, [
      { message: "Cita eliminada" },
      deleteCita
    ]);
  } catch (error) {
    return sendErrorResponse(res, 500, "No se puede eliminar la cita", error);
  }
};

// // ACTUALIZAR CITA COMO PACIENTE
citaController.updateCita = async (req, res) => {
  try {
    const paciente = await Paciente.findOne({where: {id_usuario: req.usuario_id}})
    const id_cita = req.params.id;
    const fecha = req.body.fecha;
    const horario = req.body.horario;
    const updateCita = await Cita.update(
      { fecha: fecha, horario: horario},
      { where: { id: id_cita, id_paciente: paciente.id } }
    );

    return sendSuccsessResponse(res, 200, [
      { message: "Cita modificada" },
      updateCita
      
    ]);
  } catch (error) {
    return sendErrorResponse(res, 500, "No se puede modificar la cita", error);
  }
};
 ///// vER CITAS COMO CLIENTES
citaController.getCitas = async (req, res) => {
  try {
    const paciente = await Paciente.findOne({where: {id_usuario: req.usuario_id}})
    const cita = await Cita.findAll({where: {id_paciente: paciente.id}})
    return sendSuccsessResponse(res, 200, [
      { message: "Tus Citas" },
      cita
      
    ]);
  } catch (error) {
    
    return sendErrorResponse(res, 500, "No se encontraron citas", error);
  }
}
citaController.getCitasOdontologo = async (req, res) => {
  try {
    const odontologo = await Odontologo.findOne({where: {id_usuario: req.usuario_id}})
    const cita = await Cita.findAll({where: {id_odontologo: odontologo.id}})
    return sendSuccsessResponse(res, 200, [
      { message: "Tus Citas" },
      cita
      
    ]);
  } catch (error) {
    
    return sendErrorResponse(res, 500, "No se encontraron citas", error);
  }
}



module.exports = citaController;