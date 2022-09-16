const http = require('http')
const fs = require("fs");


const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        fs.readFile("index.html",(err,pagersp)=>{
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
    else if(req.url==="/classical"){
        fs.readFile("homer.html",(err,pagersp)=>{
            if(err){
                res.writeHead(404);
                res.write('Requested content not found',err)
            }
            else{
                res.writeHead(200,{'Content-Type':'text.html'});
                res.write(pagersp);
            }
            res.end();
        })
    }
    else if(req.url==="/dystopy"){
        fs.readFile("bradbury.html",(err,pagersp)=>{
            if(err){
                res.writeHead(404);
                res.write('Requested content not found',err)
            }
            else{
                res.writeHead(200,{'Content-Type':'text.html'});
                res.write(pagersp);
            }
            res.end();
        })
    }
    else if(req.url==="/ respond"){
        fs.readFile("index.html",(err,pagersp)=>{
            if(err){
                res.writeHead(404);
                res.write('Requested content not found',err)
            }
            else{
                res.writeHead(200,{'Content-Type':'text.html'});
                res.write(pagersp);
            }
            res.end();
        })
    }
    else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(3000)