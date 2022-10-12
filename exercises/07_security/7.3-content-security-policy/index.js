const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });


  if (request.url === '/' || request.url === undefined) {
    fs.readFile(path.resolve('index.html'), function(error, file) {
      if (error) {
        response.writeHead(404);
        response.end(JSON.stringify(error));
        return;
      } else {
        // TODO: modify Content Security 
        // Policy header value as required
        response.writeHead(200, {
          'Content-Security-Policy': 'default-src \'none\''
        });
        response.write(file);
      }
      response.end();
    })
  } else if (request.url === '/js/let_me_run.js') {
    fs.readFile(path.resolve('js/let_me_run.js'), function(error, file) {
      if (error) {
        response.writeHead(404);
        response.end(JSON.stringify(error));
        return;
      } else {
        response.writeHead(200, { 'Content-Type': 'text/javascript' });
        response.write(file);
      }
      response.end();
    })
  } else {
    response.statusCode = 404;
    response.statusMessage = 'Requested content not found';
    response.end(`${response.statusCode} - ${response.statusMessage}`);
  }
}).listen(3000);