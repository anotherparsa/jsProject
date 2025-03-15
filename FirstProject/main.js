import express from 'express';
import * as home from './routes/home.js'
import * as admin from './routes/admin.js'

const app = express();

app.use((req, res, next) => {
    console.log(`request method: ${req.method}, request url: ${req.url}`);
    next();
})

app.use(home.router);
app.use(admin.router);

app.listen(8080, () => {
    console.log("running server on port 8080");
});