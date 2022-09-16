const http = require('http');
const fs = require('fs');
const path = require('path');

module.exports = http.createServer(function(request, response) {
  if (request.url === '/'){
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
  // else if (request.url === ' '){
  //   response.status(404).send('404! Page not found');
  //   // response.writeHead(404, { 'Content-Type':'text/html'});
  //   // readFileSendResponse('homer.html', 'text/plain', response);
  // }
  else {
    // response.statusCode = 404;
    // response.statusMessage = 'Requested content not found';
    // response.end(response.statusMessage);
    response.writeHead(404);
    response.write("Requested content not found")
    response.end();
  }
}).listen(3000);

const readFileSendResponse = (fileName, contentType, response) => {
  fs.readFile(path.resolve(fileName), function(error, file) {
    if (error) {
        response.writeHead(404);
        response.write('Requested content not found', error);
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(file);
    }
    response.end();
  })
}