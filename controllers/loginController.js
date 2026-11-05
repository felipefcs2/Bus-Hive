const model = require("../models/loginModel");

//listar
exports.index = async (req, res) => {
    let logins = await model.listar();

    res.render("logins/index", {
        logins,
        loginEditar: null
    });
};

//listar
exports.salvar = async (req, res) => {
    await model.salvar({
        nome: req.body.nome,
        senha: req.body.senha
    });
    res.redirect("/homelogados");
};
