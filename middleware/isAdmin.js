const { sendErrorResponse } = require("../_util/sendResponse");

const isAdmin = (req, res, next) => {
  const { usuario_role } = req;
  if (usuario_role != "admin") {
    return sendErrorResponse(res, 403, "No tiene los permisos necesarios");
  } else next();
};

module.exports = isAdmin;