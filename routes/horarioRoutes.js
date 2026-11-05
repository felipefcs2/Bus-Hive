const express = require("express");
const router = express.Router();

const controller = require("../controllers/horarioController");

router.get("/", controller.index);
router.get("/editar/:id", controller.formEditar);
router.post("/editar/:id", controller.editar);
router.post("/excluir/:id", controller.excluir);

module.exports = router;