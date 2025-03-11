import http from "http"
import * as secondary from './secondary.js'

let server = http.createServer((req, res) => {
    console.log(req);
})

secondary.say_hello();

server.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})