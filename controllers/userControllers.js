const userController = {};
const { Usuario } = require("../models");
const { getPagesFromCountLimit, normalizePage } = require("../_util/util");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");
const {hash} = require("../_util/hash")



//CONTROLADOR PARA VER TODOS LOS USUARIOS REGISTRADOS (SOLO SI ES ADMIN PUEDE VER LOS PACIENTES)
userController.getAll = async (req, res) => {
    let { page } = req.query;
    LIMIT = 3;
    try {
      const count = await Usuario.count();
      const pages = getPagesFromCountLimit(count, LIMIT);
      page = normalizePage(page, pages);
      const usuarios = await Usuario.findAll({limit: LIMIT, offset: (page - 1) * LIMIT, attributes: {exclude: ["password"]},
      });
      sendSuccsessResponse(res, 200, {
        info: {
          total_results: count,
          limit_results: usuarios.length,
          page: page,
          total_pages: pages,
        },
        results: usuarios,
      });
    } catch (error) {
      sendErrorResponse(res, 500, "Error al recuperar usuarios", error);
    }
  };




  //CONTROLADOR PARA VER SU PROPIO PERFIL UTILIZANDO SU ID
  userController.getProfile = async (req, res) =>{
    try {
      const {usuario_id} = req
     const profile = await Usuario.findOne({where : {id : usuario_id}, attributes: {exclude:["password","createdAt","updatedAt","id_role"]}})
     sendSuccsessResponse(res, 200, profile)
    } catch (error) {
     sendErrorResponse(res, 404, "Id no existente", error)
    }
   };


   
   //CONTROLADOR PARA MODIFICAR SU PROPIO USUARIO
  userController.updateProfile = async (req, res) => {
    try {
      const id_usuario = req.usuario_id;
      let newPassword;
      if (req.body.password) {
        newPassword = hash(req.body.password);
        console.log(newPassword);
      }
      const updateProfile = await Usuario.update(
        {
          ...req.body,
          password: newPassword,
          id_rol: 1,
        },
        { where: { id: id_usuario } }
      );
      if (updateProfile == 1) {
        return sendSuccsessResponse(res, 200, {
          success: true,
          message: "Usuario modificado",
        });
      } else {
        return sendErrorResponse(res, 400, "Usuario no encontrado");
      }
    } catch (error) {
      return sendErrorResponse(res, 500, "Error al actualizar el perfil", error);
    }
  };




  module.exports = userController 