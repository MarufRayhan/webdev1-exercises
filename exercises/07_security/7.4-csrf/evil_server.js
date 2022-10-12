const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
  fs.readFile("evil_server.html", function(error, htmlPage) {
    if (error) {
      response.writeHead(404);
      response.write('An error occured: ', error);
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(htmlPage);
    }
    response.end();
  });
}).listen(3001);