//model - bd
const db = require("../config/firebase");
const ref = db.ref("cartaocadastros");

//listar
async function listar() {
    let registros = await ref.once("value");
    let dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome,
        ncartao: dados[id].ncartao
    }));
}

//salvar
async function salvar(cartaocadastro){
    let novoRegistro = ref.push();

    await novoRegistro.set({
        nome: cartaocadastro.nome,
        ncartao: cartaocadastro.ncartao
    })
}

//exportar
module.exports = {
    listar,
    salvar
};