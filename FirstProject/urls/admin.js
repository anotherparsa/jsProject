import express from 'express'
export const router = express.Router()

router.get('/home', (req, res) =>{
    res.send("this is admin home page");
})

router.get('/setting', (req, res) => {
    res.send("this is admin setting page");
})