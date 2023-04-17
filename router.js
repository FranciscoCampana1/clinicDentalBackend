const express = require("express");
const router = express.Router();
const indexRouter = require("./routes/index");
const usuariosRouter = require("./routes/users");

/* home page */
router.use("/", indexRouter);

router.use("/usuarios", usuariosRouter)



module.exports = router;
