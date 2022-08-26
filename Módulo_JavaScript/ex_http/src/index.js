const express  = require ('express');
const app = express();

app.get('/', function(request,response) {
    response.send('Seja Bem-vindo ao app!');
});


app.listen(8081, function() {
    console.log('Servidor Rodando');
});
