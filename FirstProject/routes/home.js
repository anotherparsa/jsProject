import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';


export const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/product/:id', (req, res) =>{
    res.send(req.params.id);
})

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../views' ,'index.html'));
})

router.get('/redirectme', (req, res) =>{
    res.redirect('/');
})

router.get('/', (req, res) => {
    res.send("Hello World");
});