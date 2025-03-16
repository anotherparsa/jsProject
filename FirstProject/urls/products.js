import express from 'express'
export const router = express.Router()

router.get('/:id', (req, res) => {
    res.send(`this is product number ${req.params.id} in our warehouse`);
})