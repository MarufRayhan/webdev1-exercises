// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// http.createServer(function(request, response) {

//   //TODO: implement sending responds to requests for XML, TXT, and */* below, handling JSON provided as an example.
//   if (request.headers['accept'].includes('application/json')) {
//     readFileSendResponse('data.json', 'application/json', response);
//   } 
//   else if(request.headers['accept'].includes('application/xml')){
//     readFileSendResponse('data.xml', 'application/xml', response);
//   }
//   else if(request.headers['accept'].includes('text/plain')){
//     readFileSendResponse('data.txt', 'text/plain', response);
//   }
//   else if(request.headers['accept'].includes('*/*')){
//     readFileSendResponse('data.txt', '*/*', response);
//   }
//   else {
//     response.statusCode = 406;
//     response.statusMessage = 'Content type not available';
//     response.end();
//   }
// }).listen(3000);

// const readFileSendResponse = (fileName, contentType, response) => {
//   fs.readFile(path.resolve(fileName), function(error, file) {
//     if (error) {
//       response.writeHead(404);
//       response.write('An error occured: ', error);
//     } else {
//       response.writeHead(200, { 'Content-Type': contentType });
//       response.write(file);
//     }
//     response.end();
//   })
// }

var page = require('webpage').create(),
    system = require('system'),
    resources = [];

page.open('http://google.com', function (status) {
    console.log('Loaded with http status:', resources[0].status);
    phantom.exit();
});

page.onResourceReceived = function(response) {
    // check if the resource is done downloading 
    if (response.stage !== "end") return;
    // apply resource filter if needed:
    if (response.headers.filter(function(header) {
        if (header.name == 'Content-Type' && header.value.indexOf('text/html') == 0) {
            response.statuscode = 404
            return response.statuscode;
        }
        return false;
    }).length > 0)
        resources.push(response);
};