import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/product/:id', (req, res) =>{
    res.send(req.params.id);
})

app.listen(8080, () =>{
    console.log("running server on port 8080");
});