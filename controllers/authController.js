const  authController= {};
const { Usuario, Paciente } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




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
          exclude: [
            //    "id_nacionalidad",
            //    "id_direccion",
            //    "createdAt",
            //    "updatedAt",
          ],
        },
        include: [
          // {
          //    model: Nacionalidad,
          //    as: "nacionalidad",
          //    attributes: ["id", "nombre_nacion"],
          // },
          // {
          //    model: Direccion,
          //    as: "direccion",
          //    attributes: {
          //       exclude: ["createdAt", "updatedAt"],
          //    },
          // },
        ],
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
        const { nombre, apellidos, telefono , email, password, fecha_de_nacimiento } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);
        if (nombre === undefined || email === undefined|| password === undefined) {
            return res.json({
                success: false,
                message: "You must fill all the fields"
            })
        }
        const nuevoUsuario = await Usuario.create(
            {
                nombre: nombre,
                apellidos: apellidos,
                telefono: telefono,
                email: email,
                password: encryptedPassword,
                fecha_de_nacimiento: fecha_de_nacimiento,
                role_id: 2
            }
        )
        const nuevoPaciente = await Paciente.create({
            id_usuario: nuevoUsuario.id
        })

        return res.json(
            {
                success: true,
                message: "User created succesfully",
                data: { nuevoUsuario, nuevoPaciente }
            });
    } catch (error) {

        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );
    }
}

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const usuario = await Usuario.findOne({ where: { email: email } });
        if (!usuario) {

            return res.send("Wrong Credentials");
        }



        const checkPassword = bcrypt.compareSync(password, user.password);
        if (!checkPassword) {

            return res.send("Wrong Credentials");
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
                roleId: usuario.role_id
            },
            'secreto'
        );
        return res.json(
            {
                success: true,
                message: "Token created",
                data: token
            }
        );
    } catch (error) {

        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );
    }
}

module.exports = authController;