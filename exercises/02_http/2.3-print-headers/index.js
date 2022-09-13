// const http = require("http");
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer(function(req, res){
//     res.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);
//     res.writeHead(200, {'Content-Type' : 'text/html'});

//     const hasContentType = res.hasHeader('content-type');
//     console.log("header", hasContentType)

//     res.write(JSON.stringify(res.getHeaders()))
//     res.end();
// }).listen(3000);

// console.log("Server started, listening to port 3000");

const http = require("http");

http.createServer((request, response)=>{
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err)=>{
        console.log(err)
    }).on('data', (chunk)=> {
        body.push(chunk);
    }).on('end', ()=>{
        body = Buffer.concat(body).toString();

        response.on('error', (err)=>{
            console.log(err)
        });

        response.setHeader('Content-Type', 'application/json');
   
        response.writeHead(200, {'Content-Type': 'application/json'})
        const responseBody = { headers, method, url, body };

        response.write(JSON.stringify(responseBody));
        response.end();
    })

}).listen(3000);