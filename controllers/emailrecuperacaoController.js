const model = require("../models/emailrecuperacaoModel");

//listar
exports.index = async (req, res) => {
    let emailrecuperacoes = await model.listar();

    res.render("emailrecuperacoes/index", {
        emailrecuperacoes,
        emailrecuperacaoEditar: null
    });
};

//listar
exports.salvar = async (req, res) => {
    await model.salvar({
        email: req.body.email
    });
    res.redirect("/codigorecuperacoes");
};