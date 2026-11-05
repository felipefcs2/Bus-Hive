//model - bd
const db = require("../config/firebase");
const ref = db.ref("logins");

//listar
async function listar() {
    let registros = await ref.once("value");
    let dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome,
        senha: dados[id].senha
    }));
}

//salvar
async function salvar(login){
    let novoRegistro = ref.push();

    await novoRegistro.set({
        nome: login.nome,
        senha: login.senha
    })
}

//exportar
module.exports = {
    listar,
    salvar
};