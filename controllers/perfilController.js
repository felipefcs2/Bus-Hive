const modelCadastro = require("../models/cadastroModel");

//listar
exports.index = async (req, res) => {
    let cadastros = await modelCadastro.listar();

    res.render("perfis/index", {
        cadastros,
        cadastroEditar: null
    });
};