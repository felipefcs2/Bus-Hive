//model - bd
const db = require("../config/firebase");
const ref = db.ref("emailrecuperacoes");

//listar
async function listar() {
    let registros = await ref.once("value");
    let dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        email: dados[id].email
    }));
}

//salvar
async function salvar(emailrecuperacao){
    let novoRegistro = ref.push();

    await novoRegistro.set({
        email: emailrecuperacao.email
    })
}

//exportar
module.exports = {
    listar,
    salvar
};