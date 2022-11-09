//Usando o Express, crie um código Node.JS, que deve receber requisições HTTP GET e POST. Depois, coloque o servidor para rodar na porta 8080.


//Importa a biblioteca Express.js.
const express = require("express");

//Instância a biblioteca para uma variável.
const app = express();

//Rota raiz com método HTTP GET.
app.get('/', (req, resp) => {
    resp.send("GET Request");
});

//Rota post para o método HTTP POST.
app.post('/post', (req, resp) => {
    resp.send("POST Request");
});


//Rota em que o servidor vai funcionar - porta 8080.
app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
