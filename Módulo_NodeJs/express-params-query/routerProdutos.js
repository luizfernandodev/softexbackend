const express = require('express');
const router = express.Router();

router.use(express.json());

const produtos = ['Feijao', 'Arroz', 'Macarrao', 'Detergente'];

router.get('/produtos', (req, res) => {
    return res.status(200).json(produtos);
});

router.get('/queryprodutos', (req, res) => {
    const { id } = req.query;

    return res.status(200).json(produtos[id]);
});

router.post('/produtos', (req, res) => {
    const { name } = req.body;
    produtos.push(name);

    return res.status(201).json(produtos);
});

router.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    produtos[id] = name;
    
    return res.status(201).json(produtos);
});

router.delete('/produtos', (req, res) => {
    const { id } = req.query;

    produtos.splice(id, 1);

    return res.json({ Message: 'Produto excluido' });
});

module.exports = router;