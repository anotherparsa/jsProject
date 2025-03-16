import express from 'express'
import * as admin from './urls/admin.js'
import * as products from './urls/products.js'
import * as home from './urls/home.js'

const app = express();

app.use((req, res, next) => {
    console.log(`request method is ${req.method} and request url is ${req.url}`);
    next();
})
app.use('/products/',products.router);
app.use('/admin/', admin.router);
app.use(home.router)



app.listen(8080, () => {
    console.log("Running server on port 8080!")
})
