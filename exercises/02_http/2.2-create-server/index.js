const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(request, response) {
  fs.readFile(path.resolve('FILE_NAME_HERE'), function(error, htmlPage) {
    if (error) {
      response.writeHead(404);
      response.write('An error occured: ', error);
    } else {
      response.writeHead(200, { 'Content-Type': 'FILE_TYPE_HERE' });
      response.write(htmlPage);
    }
    response.end();
  });
}).listen(3000);