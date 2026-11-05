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

//salvar
async function salvar(horariocadastro){
    let novoRegistro = ref.push();

    await novoRegistro.set({
        nomelembrete: horariocadastro.nomelembrete,
        nomeponto: horariocadastro.nomeponto,
        horario: horariocadastro.horario,
        linha: horariocadastro.linha,
        sentido: horariocadastro.sentido,
        diasemana: horariocadastro.diasemana,
        observacoes: horariocadastro.observacoes
    })
}

// listar linhas de ônibus
async function listarLinhas() {
    const snapshot = await db.ref("aaalinhas").once("value");
    const dados = snapshot.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        numero: dados[id].numero,
        nome: dados[id].nome
    }));
}

//exportar
module.exports = {
    listar,
    salvar,
    listarLinhas
};