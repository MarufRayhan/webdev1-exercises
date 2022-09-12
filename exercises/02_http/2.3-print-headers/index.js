const http = require("http");

const server = http.createServer(function(req, res){
    // res.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);
    res.writeHead(200, {'Content-Type' : 'text/html'});
    // const header1 = res.getHeaders();
    // console.log("header 1 = ",header1);
    res.write(JSON.stringify(res.getHeaders()))
    res.end();
}).listen(3000);

console.log("Server started, listening to port 3000");