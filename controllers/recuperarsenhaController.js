const model = require("../models/recuperarsenhaModel");

//listar
exports.index = async (req, res) => {
    let recuperarsenhas = await model.listar();

    res.render("recuperarsenhas/index", {
        recuperarsenhas,
        recuperarsenhaEditar: null
    });
};

//listar
exports.salvar = async (req, res) => {
    await model.salvar({
        senha: req.body.senha,
        nsenha: req.body.nsenha
    });
    res.redirect("/logins");
};