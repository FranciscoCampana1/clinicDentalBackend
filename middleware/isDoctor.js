const { sendErrorResponse } = require("../_util/sendResponse");

const isDoctor = async (req, res, next) => {
  const {usuario_role} = req;

  if(usuario_role != 3){
    return sendErrorResponse (res, 403, "no tiene los permisos necesarios")
  }else next()  
};

module.exports = isDoctor;