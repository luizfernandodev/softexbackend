const express = require('express');
const app = express();


app.use(express.json());

const books = [];

app.get('/books', (req, res) => {
    return res.status(200).json(books);
});


app.post('/addbooks', (req, res) => {
    const { newBook } = req.body;
    books.push(newBook);

    return res.status(201).json(books);
});

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { updatebook } = req.body;

    books[id] = updatebook;
    
    return res.status(201).json(books);
});

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;

    books.splice(id, 1);

    return res.json({ Message: 'Book deleted' });
});
app.listen(8080, () => {
    console.log("server on")
})
