const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(request, response) {

  //TODO: implement sending responds to requests for XML, TXT, and */* below, handling JSON provided as an example.
  if (request.headers['accept'].includes('application/json')) {
    readFileSendResponse('data.json', 'application/json', response);
  } else {
    response.statusCode = 406;
    response.statusMessage = 'Content type not available';
    response.end();
  }
}).listen(3000);

const readFileSendResponse = (fileName, contentType, response) => {
  fs.readFile(path.resolve(fileName), function(error, file) {
    if (error) {
      response.writeHead(404);
      response.write('An error occured: ', error);
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(file);
    }
    response.end();
  })
}