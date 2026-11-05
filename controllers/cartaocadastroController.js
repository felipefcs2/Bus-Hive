const model = require("../models/cartaocadastroModel");

//listar
exports.index = async (req, res) => {
    let cartaocadastros = await model.listar();

    res.render("cartaocadastros/index", {
        cartaocadastros,
        cartaocadastroEditar: null
    });
};

//listar
exports.salvar = async (req, res) => {
    await model.salvar({
        nome: req.body.nome,
        ncartao: req.body.ncartao
    });
    res.redirect("/cartaoinfos");
};