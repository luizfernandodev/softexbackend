const express = require('express');
const router = express.Router();

router
    .get("/jogos", (req, res) => {
        console.log("Busca")
    })
    .get("/jogos/:id", (req, res) => {
        console.log("Busca Especifica")
    })
    .post("/jogos", (req, res) => {
        console.log("Cadastro")
    })
    .put("/jogos", (req, res) => {
        console.log("Update")
    })
    .delete("/jogos", (req, res) => {
        console.log("Excluir")
    })

module.exports = router;