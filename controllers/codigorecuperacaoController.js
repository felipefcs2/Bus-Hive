const model = require("../models/codigorecuperacaoModel");
const emailModel = require("../models/emailrecuperacaoModel");

//listar
exports.index = async (req, res) => {
    let codigorecuperacoes = await model.listar();
    let emailrecuperacoes = await emailModel.listar();

    res.render("codigorecuperacoes/index", {
        codigorecuperacoes,
        emailrecuperacoes,
        codigorecuperacaoEditar: null
    });
};

//listar
exports.salvar = async (req, res) => {
    await model.salvar({
        codigo: req.body.codigo
    });
    res.redirect("/recuperarsenhas");
};