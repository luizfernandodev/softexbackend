const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let products = [];

app.get('/products', (req,res) => {
    return res.status(200).json(products);
});

app.post('/addproducts', (req,res) => {
    const { id, item, price, quantity } = req.body;
    const newProduct = { id, item, price, quantity };
    products.push(newProduct);
    return res.status(201).json(`Product ${newProduct} added`);
});

app.put('/product/:product_id', (req,res) =>{
    const { product_id } = req.params;
    const { item, price, quantity } = req.body; 
    produtos[product_id] = { item, price, quantity };
    
    if (product_id == null || product_id == '') {
        res.status(404).send("Product not found");
    }else{
        return res.status(200).json(products);
    }
});

app.delete('/product/:product_id', (req,res) => {
    const { product_id } = req.params;
    const filteredProducts = products.filter(product => product.id !== product_id);
    products = filteredProducts
    return res.status(204);
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})