const { Odontologo } = require("../models");
const { sendErrorResponse } = require("../_util/sendResponse");
const isDoctor = async (req, res, next) => {
  try {
    const odontologo = await Odontologo.findOne({
      where: { id_usuario: req.user_id },
    });
    if (!odontologo) {
      return sendErrorResponse(res, 403, "No tiene los permisos necesarios");
    }
    req.id_odontologo = odontologo.id;
    next();
  } catch (error) {
    return sendErrorResponse(res, 500, "Error verificando el usuario", error);
  }
};
module.exports = isDoctor;