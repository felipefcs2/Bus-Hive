//model - bd
const db = require("../config/firebase");
const ref = db.ref("horariocadastros");

//listar
async function listar() {
    let registros = await ref.once("value");
    let dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nomelembrete: dados[id].nomelembrete,
        nomeponto: dados[id].nomeponto,
        horario: dados[id].horario,
        linha: dados[id].linha,
        sentido: dados[id].sentido,
        diasemana: dados[id].diasemana,
        observacoes: dados[id].observacoes
    }));
}

//buscarPorId
async function buscarPorId(id) {
    const registros = await ref.child(id).once("value");

    if (!registros.exists()) return null;

    return {
        id,
        ...registros.val()
    };
}

//editar
async function editar(id, novoHorario) {
    await ref.child(id).update({
        nomelembrete: novoHorario.nomelembrete,
        nomeponto: novoHorario.nomeponto,
        horario: novoHorario.horario,
        linha: novoHorario.linha,
        sentido: novoHorario.sentido,
        diasemana: novoHorario.diasemana,
        observacoes: novoHorario.observacoes
    });
}

//excluir
async function excluir(id) {
    await ref.child(id).remove();
}

//exportar
module.exports = {
    listar,
    buscarPorId,
    editar,
    excluir
};