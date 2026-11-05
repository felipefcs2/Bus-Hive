//model - bd
const db = require("../config/firebase");
const ref = db.ref("cartaoinfos");

//listar
async function listar() {
    let registros = await ref.once("value");
    let dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        ncartaoc: dados[id].ncartaoc,
        valorrecarga: dados[id].valorrecarga
    }));
}

//salvar
async function salvar(cartaoinfo){
    let novoRegistro = ref.push();

    await novoRegistro.set({
        ncartaoc: cartaoinfo.ncartaoc,
        valorrecarga: cartaoinfo.valorrecarga
    })
}

//exportar
module.exports = {
    listar,
    salvar
};