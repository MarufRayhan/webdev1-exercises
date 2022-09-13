const http = require("http");

const server = http.createServer(function(req, res){
    let body = []
    res.writeHead(200, {'Content-Type' : 'text/html'});
    req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        res.end(body);
      });


}).listen(3000);