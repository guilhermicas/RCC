const express = require("express");

const app = express();

// Configuração do servidor
const PORT = 1234;

// Ficheiros Static
app.use(express.static("public"));

// Handling de dados
app.use(express.urlencoded({ extended: false }));

// Command routes
let command_routes = require("./routes/commands");

app.use(command_routes);

app.listen(PORT, (err) => {
  if (err)
    return console.log(
      "Não foi possivel colocar o servidor a ouvir na porta " + PORT
    );
  console.log("Servidor a ouvir em http://localhost:" + PORT);
});
