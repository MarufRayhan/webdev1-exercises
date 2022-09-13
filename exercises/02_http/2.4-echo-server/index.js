const http = require("http");

const server = http.createServer(function(req, res){
    let body = []
    req.on('data', (chunk)=>{
        body.push(chunk)
    });
    req.on('end', ()=>{
        console.log("Streaming finished");
        const parsedbody = Buffer.concat(body).toString();
        console.log(parsedbody);
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(parsedbody);
    });


}).listen(3000);