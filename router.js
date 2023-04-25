const express = require("express");
const router = express.Router();
const usuariosRouter = require("./routes/users");
const authRouter = require('./routes/auth');
const citasRouter = require('./routes/citas')
const indexRouter = require('./routes/index')

//Ruta para index
router.use('/', indexRouter)

//Ruta para registrarse y login
router.use("/auth", authRouter);

//Ruta para realizar funciones como Usuario
router.use("/usuarios", usuariosRouter);

//Ruta para utilizar las Citas
router.use('/citas', citasRouter )


module.exports = router;
