const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/rotas');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
const server = app.listen(3000, () => {
    console.log("App rodando na porta.", server.address().port)
});