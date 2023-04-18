const { getTokenFromHeader, decodedToken } = require("../_util/token");
const { sendErrorResponse } = require("../_util/sendResponse");
const verifyToken = (req, res, next) => {
  const token = getTokenFromHeader(req.headers);
  if (!token) {
    return sendErrorResponse(res, 401, "No se encontró ningún token de autorización");
  }
  try {
    const decoded = decodedToken(token);
    console.log(decoded)
    req.usuario_id = decoded.usuario_id;
    req.usuario_role = decoded.usuario_role;
    next();
  } catch (error) {
    sendErrorResponse(res, 400, "Token invalido", error);
  }
};
module.exports = verifyToken;