const model = require("../models/horariocadastroModel");

//listar
exports.index = async (req, res) => {
    let cadastrohorarios = await model.listar();
    let linhas = await model.listarLinhas();

    res.render("horariocadastros/index", {
        cadastrohorarios,
        cadastrohorariosEditar: null,
        linhas
    });
};

//listar
exports.salvar = async (req, res) => {
    await model.salvar({
        nomelembrete: req.body.nomelembrete,
        nomeponto: req.body.nomeponto,
        horario: req.body.horario,
        linha: req.body.linha,
        sentido: req.body.sentido,
        diasemana: req.body.diasemana,
        observacoes: req.body.observacoes
    });
    res.redirect("/horarios");
};