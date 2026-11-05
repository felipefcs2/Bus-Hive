const model = require("../models/cadastroModel");

//listar
exports.index = async (req, res) => {
    let cadastros = await model.listar();

    res.render("cadastros/index", {
        cadastros,
        cadastroEditar: null
    });
};

//listar
exports.salvar = async (req, res) => {
    await model.salvar({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    });
    res.redirect("/cadastros");
};