import express from 'express'

export const router = express.Router();

router.get('/admin/home', (req, res) => {
    res.send("this is admin home page from admin routes");
})