const express = require("express");
const router = express.Router();

const controller = require("../controllers/cartaocadastroController");

router.get("/", controller.index);
router.post("/salvar", controller.salvar);

module.exports = router;