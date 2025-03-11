import http from "http"
import * as secondary from './secondary.js'

let server = http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200);
    res.end("Hello World")
})

server.listen(8080, ()=>{
    secondary.say_hello();
    console.log("Server is running on port 8080");
})