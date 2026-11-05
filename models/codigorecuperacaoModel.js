//model - bd
const db = require("../config/firebase");
const ref = db.ref("codigorecuperacoes");

//listar
async function listar() {
    let registros = await ref.once("value");
    let dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        codigo: dados[id].codigo
    }));
}

//salvar
async function salvar(codigorecuperacao){
    let novoRegistro = ref.push();

    await novoRegistro.set({
        codigo: codigorecuperacao.codigo
    })
}

//exportar
module.exports = {
    listar,
    salvar
};