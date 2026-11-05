const model = require("../models/integrantesModel");

//listar
exports.index = async (req, res) => {
    let integrantes = await model.listar();

    res.render("integrantes/index", {
        integrantes,
        integranteEditar: null
    });
};