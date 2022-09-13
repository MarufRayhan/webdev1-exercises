const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    let body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        res.end(body)
      })

      res.end();

}).listen(3000);