const authController = {};
const { Usuario, Paciente } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getPagesFromCountLimit, normalizePage } = require("../_util/util");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");

authController.getAll = async (req, res) => {
  let { page } = req.query;
  try {
    const count = await Usuario.count();
    const pages = getPagesFromCountLimit(count, LIMIT);
    page = normalizePage(page, pages);
    const usuarios = await Usuario.findAll({
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
      attributes: {
        exclude: [],
      },
      include: [],
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
    sendErrorResponse(res, 500, "Error retreinving users", error);
    res.json(error);
  }
};

authController.register = async (req, res) => {
  try {
    const {
      nombre,
      apellidos,
      telefono,
      email,
      password,
      fecha_de_nacimiento,
    } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, 10);
    if (nombre === undefined || email === undefined || password === undefined) {
      return res.json({
        success: false,
        message: "Debe completar correctamente todos los campos requeridos",
      });
    }
    const nuevoUsuario = await Usuario.create({
      nombre: nombre,
      apellidos: apellidos,
      telefono: telefono,
      email: email,
      password: encryptedPassword,
      fecha_de_nacimiento: fecha_de_nacimiento,
      role_id: 2,
    });
    const nuevoPaciente = await Paciente.create({
      id_usuario: nuevoUsuario.id,
    });

    return res.json({
      success: true,
      message: "Usuario creado correctamente",
      data: { nuevoUsuario, nuevoPaciente },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Algo salió mal",
      error: error.message,
    });
  }
};

authController.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ where: { email: email } });
    if (!usuario) {
      return res.send("Credenciales incorrectas");
    }

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      return res.send("Credenciales incorrectas");
    }

    //Token propio para autenticar el usuario
    const token = jwt.sign(
      {
        id_usuario: usuario.id,
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        telefono: usuario.telefono,
        email: usuario.email,
        fecha_de_nacimiento: usuario.fecha_de_nacimiento,
        id_role: usuario.role_id,
      },
      "secreto"
    );
    return res.json({
      success: true,
      message: "Token creado",
      data: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Algo salió mal",
      error: error.message,
    });
  }
};

module.exports = authController;

