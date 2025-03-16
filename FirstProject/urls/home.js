import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

export const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('', (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "home.html"));
})

router.get('/redirectme', (req, res) => {
    res.redirect('/');
})