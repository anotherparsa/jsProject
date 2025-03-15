import express from 'express'

export const router = express.Router();

router.get('/newpost', (req, res) => {
    res.send("This is new post page ");
})