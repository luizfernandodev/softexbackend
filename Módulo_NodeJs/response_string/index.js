//Importa a biblioteca Express.js.
const express = require("express");

//Instância a biblioteca para uma variável.
const app = express();

//Rota raiz com método HTTP GET.
app.get('/', (req, resp) => {
    resp.send("Recebi um requisição HTTP GET");
});

//Rota raiz para o método HTTP POST.
app.post('/', (req, resp) => {
    resp.send("Recebi um requisição HTTP POST");
});

//Rota raiz para o método HTTP PUT.
app.put('/', (req, resp) => {
    resp.send("Recebi um requisição HTTP PUT");
});

//Rota raiz para o método HTTP DELETE.
app.post('/', (req, resp) => {
    resp.send("Recebi um requisição HTTP DELETE");
});



//Rota em que o servidor vai funcionar - porta 8080.
app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
