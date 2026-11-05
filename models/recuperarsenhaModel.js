//model - bd
const db = require("../config/firebase");
const ref = db.ref("recuperarsenhas");

//listar
async function listar() {
    let registros = await ref.once("value");
    let dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        senha: dados[id].senha,
        nsenha: dados[id].nsenha
    }));
}

//salvar
async function salvar(login){
    let novoRegistro = ref.push();

    await novoRegistro.set({
        senha: login.senha,
        nsenha: login.nsenha
    })
}

//exportar
module.exports = {
    listar,
    salvar
};