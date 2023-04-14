const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");

/* home page */
router.use("/", indexRouter);



module.exports = router;
