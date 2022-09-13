const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    let body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).reverse().toString();
        console.log("body",body)
        res.write(body)
        res.end()
      })


}).listen(3000);