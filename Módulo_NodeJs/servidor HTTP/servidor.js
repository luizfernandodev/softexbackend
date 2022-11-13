/*Sem usar bibliotecas, crie um projeto simples em Node.js que seja capaz de responder requisições HTTP.
Explique como rodar e testar.*/


//Importando a bilbioteca padrão HTTP do nodejs .
const http = require("http");

//Criando a variavel para configuração da porta.
const PORTA = process.env.PORT || 8080;


//Para qualquer requisição web ser respondida com o "Olá Mundo!" 
//Exibir mensagem de que o servidor está rodando.

http.createServer((request, response) => {
    response.end("Ola Mundo!");
}).listen(PORTA, () => {
    console.log(`Servidor na porta ${PORTA}`);
});

/*Para rodar o projeto é necessário que inicial o terminal e execute o comando node servidor.js e verificar se está rodando, depois de iniciar o servidor 
escolha um navegador de sua preferência e digite localhost:8080 porta definida no projeto para rodar no seu computador*/
