//model - bd
const db = require("../config/firebase");
const ref = db.ref("cadastros");

//listar
async function listar() {
    let registros = await ref.once("value");
    let dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome,
        email: dados[id].email,
        senha: dados[id].senha
    }));
}

//salvar
async function salvar(cadastro){
    let novoRegistro = ref.push();

    await novoRegistro.set({
        nome: cadastro.nome,
        email: cadastro.email,
        senha: cadastro.senha
    })
}

//exportar
module.exports = {
    listar,
    salvar
};