const model = require("../models/horarioModel")
const horariocadastroModel = require("../models/horariocadastroModel");

//listar
exports.index = async (req, res) => {
    let horarios = await model.listar();
    const linhas = await horariocadastroModel.listarLinhas();

    horarios = horarios.map(horario => {
        const linhaEncontrada = linhas.find(
            linha => linha.id === horario.linha
        );

        return {
            ...horario,
            nomeLinha: linhaEncontrada
                ? `${linhaEncontrada.numero} - ${linhaEncontrada.nome}`
                : "Linha não encontrada"
        };
    });

    res.render("horarios/index", {
        horarios,
        horariocadastroEditar: null
    });
};

//editar form
exports.formEditar = async (req, res) => {
    const horarios = await model.listar();
    const linhas = await horariocadastroModel.listarLinhas();

    const horariocadastroEditar = await model.buscarPorId(req.params.id);

    res.render("horarios/index", {
        horarios,
        linhas,
        horariocadastroEditar
    });
};

//editar
exports.editar = async (req, res) => {
  await model.editar(req.params.id, {
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

//excluir
exports.excluir = async (req, res) => {
  await model.excluir(req.params.id);

  res.redirect("/horarios");
};