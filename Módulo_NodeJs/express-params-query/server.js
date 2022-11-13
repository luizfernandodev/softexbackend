const express = require('express');
const app = express();
const PORT = 8080;

const routerProdutos = require('./routerProdutos');

app.use('/', routerProdutos);

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});