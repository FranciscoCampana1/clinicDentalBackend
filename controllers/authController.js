const authController = {};
const { Usuario, Paciente, Odontologo } = require("../models");
const bcrypt = require("bcrypt");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");
const { compareHash } = require("../_util/hash");
const { generateToken } = require("../_util/token");

//CONTROLADOR PARA REGISTRAR PACIENTES
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

    const nuevoUsuario = await Usuario.create({
      nombre: nombre,
      apellidos: apellidos,
      telefono: telefono,
      email: email,
      password: encryptedPassword,
      fecha_de_nacimiento: fecha_de_nacimiento,
      id_role: 1,
    });
    const nuevoPaciente = await Paciente.create({
      id_usuario: nuevoUsuario.id,
    });

    return sendSuccsessResponse(res, 200, {
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    return sendErrorResponse(res, 500, "Algo salió mal", error) 
  }
};

//CONTROLADOR PARA REGISTRAR ODOTOLOGOS (SOLO UN ADMIN PUEDE REALIZAR ESTOS REGISTROS)
authController.registerOdontologo = async (req, res) => {
  try {
    const {
      nombre,
      apellidos,
      telefono,
      matriculaOdontologo,
      email,
      password,
      fecha_de_nacimiento,
    } = req.body;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const nuevoUsuario = await Usuario.create({
      nombre: nombre,
      apellidos: apellidos,
      telefono: telefono,
      email: email,
      password: encryptedPassword,
      fecha_de_nacimiento: fecha_de_nacimiento,
      id_role: 3,
    });
    await Odontologo.create({
      id_usuario: nuevoUsuario.id,
      matriculaOdontologo: matriculaOdontologo,
    });

    return sendSuccsessResponse(
      res,
      200,
      { message: "Odontologo creado correctamente" }
    );
  } catch (error) {
    return sendErrorResponse(res, 500, { message: "Algo salió mal" }, error);
  }
};

//CONTROLADOR PARA LOGEAR USUARIOS
authController.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return sendErrorResponse(
      res,
      400,
      "Debe completar los campos requeridos correctamente"
    );
  }
  try {
    const usuario = await Usuario.findOne({ where: { email: email } });
    if (!usuario) {
      return sendErrorResponse(res, 404, "Email no existente");
    }
    const isValidPassword = compareHash(password, usuario.password);
    if (!isValidPassword) {
      return sendErrorResponse(res, 401, "Contraseña incorrecta");
    }
    const token = generateToken({
      usuario_id: usuario.id,
      usuario_role: usuario.id_role,
    });
    let role;
    if (usuario.id_role == 1) {
      role = "user";
    } else if (usuario.id_role == 2) {
      role = "admin";
    } else if (usuario.id_role == 3) {
      role = "odontologo";
    }
    sendSuccsessResponse(res, 200, {
      message: "Inicio de sesión de usuario exitoso",
      token: token,
      role: role,
    });
  } catch (error) {
    sendErrorResponse(res, 500, "Inicio de sesión de usuario fallido", error);
  }
};

module.exports = authController;
