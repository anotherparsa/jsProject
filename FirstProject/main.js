import express from 'express';

const app = express();

app.use((req, res, next) => {
    console.log(`request method: ${req.method}, request url: ${req.url}`);
    next();
})

app.get('/product/:id', (req, res) =>{
    res.send(req.params.id);
})

app.get('/redirectme', (req, res) =>{
    res.redirect('/');
})

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(8080, () => {
    console.log("running server on port 8080");
});