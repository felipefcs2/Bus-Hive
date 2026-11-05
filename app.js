const express = require("express");
const path = require("path");

const app = express();
app.use(express.static('public'));

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// FORM
app.use(express.urlencoded({ extended: true }));

// ROTAS

app.use((req, res, next) => {
    res.locals.reqPath = req.path;
    next();
});

const loginRoutes = require("./routes/loginRoutes");
app.use("/logins", loginRoutes);

const mapaRoutes = require("./routes/mapaRoutes");
app.use("/mapas", mapaRoutes);

const cadastroRoutes = require("./routes/cadastroRoutes");
app.use("/cadastros", cadastroRoutes);

const emailrecuperacaoRoutes = require("./routes/emailrecuperacaoRoutes");
app.use("/emailrecuperacoes", emailrecuperacaoRoutes);

const codigorecuperacaoRoutes = require("./routes/codigorecuperacaoRoutes");
app.use("/codigorecuperacoes", codigorecuperacaoRoutes);

const recuperarsenhaRoutes = require("./routes/recuperarsenhaRoutes");
app.use("/recuperarsenhas", recuperarsenhaRoutes);

const integrantesRoutes = require("./routes/integrantesRoutes");
app.use("/integrantes", integrantesRoutes);

const cartaocadastroRoutes = require("./routes/cartaocadastroRoutes");
app.use("/cartaocadastros", cartaocadastroRoutes);

const cartaoinfoRoutes = require("./routes/cartaoinfoRoutes");
app.use("/cartaoinfos", cartaoinfoRoutes);

const horarioRoutes = require("./routes/horarioRoutes");
app.use("/horarios", horarioRoutes);

const horariocadastroRoutes = require("./routes/horariocadastroRoutes");
app.use("/horariocadastros", horariocadastroRoutes);

const perfilRoutes = require("./routes/perfilRoutes");
app.use("/perfis", perfilRoutes);

const homelogadoRoutes = require("./routes/homelogadoRoutes");
app.use("/homelogados", homelogadoRoutes);

// INDEX PRINCIPAL
app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Página Inicial",
  });
});

// SERVER
app.listen(3000, () => {
  console.log("http://localhost:3000");
});