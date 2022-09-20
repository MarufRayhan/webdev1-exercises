const http = require('http')
const fs = require("fs");

const server = http.createServer((req,res)=>{
    if(req.method === "POST"){
        console.log("Resuest is", req.method)
        fs.readFile("post.html",(err,pagersp)=>{
            if(err){
                res.writeHead(404);
                res.write('Requested content not found',err)
            }
            else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(pagersp)
            }
            res.end();
        })
    }
    else if(req.method === "GET"){
        console.log("request is", req.method)
        fs.readFile("post.html",(err,pagersp)=>{
            if(err){
                res.writeHead(404);
                res.write('Requested content not found',err)
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(pagersp);
            }
            res.end();
        })
    }
    else {
        res.writeHead(405, "Allow: GET, POST")
        // res.writeHead("Allow: GET, POST")
        res.end()
    }
})

server.listen(3000)