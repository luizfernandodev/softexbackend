const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const routes = require('./routes/index');

app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log(`Exemplo de um aplicativo escutando na porta ${port}`)
})