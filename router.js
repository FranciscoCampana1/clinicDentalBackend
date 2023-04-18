const express = require("express");
const router = express.Router();
const usuariosRouter = require("./routes/users");
const authRouter = require('./routes/auth');


/* home page */

router.use("/usuarios", usuariosRouter);
router.use("/auth", authRouter);

module.exports = router;
