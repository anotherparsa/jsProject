import express from 'express'

export const router = express.Router();

router.get('/product/:id', (req, res) =>{
    res.send(req.params.id);
})

router.get('/home', (req, res) => {
    res.send("this is home page from home.js routes")
})

router.get('/redirectme', (req, res) =>{
    res.redirect('/');
})

router.get('/', (req, res) => {
    res.send("Hello World");
});