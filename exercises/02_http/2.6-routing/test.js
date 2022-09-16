const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(request, response) {
    if (request.url === '/respond'){
    response.writeHead(200, { 'Content-Type':'text/html'});
    readFileSendResponse('index.html', 'text/html', response);
  }
  else if (request.url === '/dystopy'){
    response.writeHead(200, { 'Content-Type':'text/html'});
    readFileSendResponse('bradbury.html', 'text/html', response);
  }
  else if (request.url === '/classical'){
    response.writeHead(200, { 'Content-Type':'text/html'});
    readFileSendResponse('homer.html', 'text/html', response);
  }
  else {
    response.statusCode = 404;
    response.statusMessage = 'Requested content not found';
    response.end(response.statusMessage);
  }
}).listen(3000);

const readFileSendResponse = (fileName, contentType, response) => {
  fs.readFile(path.resolve(fileName), function(error, file) {
    if (error) {
        response.writeHead(404);
        response.write('Requested content not found');
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(file);
    }
    response.end();
    
  })
}
