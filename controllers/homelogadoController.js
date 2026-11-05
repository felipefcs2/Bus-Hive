const model = require("../models/homelogadoModel");

//listar
exports.index = async (req, res) => {
    let homelogados = await model.listar();

    res.render("homelogados/index", {
        homelogados,
        homelogadoEditar: null
    });
};