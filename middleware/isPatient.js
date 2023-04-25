const { Paciente } = require("../models");
const { sendErrorResponse } = require("../_util/sendResponse");
const isPatient = async (req, res, next) => {
  try {
    const paciente = await Paciente.findOne({
      where: { id_usuario: req.usuario_id },
    });
    if (!paciente) {
      return sendErrorResponse(res, 403, "No tiene los permisos necesarios");
    }
    req.id_paciente = paciente.id;
    next();
  } catch (error) {
    return sendErrorResponse(res, 500, "Error verificando el usuario", error);
  }
};
module.exports = isPatient;
