const model = require("../models/cartaoinfoModel")
const cartaocadastroModel = require("../models/cartaocadastroModel");

//listar
exports.index = async (req, res) => {
    let cartaoinfo = await model.listar();
    let cartaocadastros = await cartaocadastroModel.listar();

    res.render("cartaoinfos/index", {
        cartaoinfo,
        cartaocadastros,
        cartaoinfoEditar: null   
    });
};

//listar
exports.salvar = async (req, res) => {
    await model.salvar({
        ncartaoc: req.body.ncartaoc,
        valorrecarga: req.body.valorrecarga
    });
    res.redirect("/cartaoinfos");
};