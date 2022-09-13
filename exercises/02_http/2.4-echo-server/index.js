const http = require("http");

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    let body = []
    req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        res.end(body);
      });
      

}).listen(3000);