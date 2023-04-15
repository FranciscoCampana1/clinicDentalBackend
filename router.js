const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");

/* home page */
router.use("/", indexRouter);

router.use("/api/registroUsuarios", registroUsuarios)



module.exports = router;
