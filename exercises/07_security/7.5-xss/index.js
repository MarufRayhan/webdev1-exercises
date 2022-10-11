const http = require('http');
const url = require('url');


http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });

  const queryObject = url.parse(request.url, true).query;

  // TODO: sanitize the the 'addThisText' query parameter user input so that injected scripts won't run
  // addThisText from the query parameters is accessed with queryObject['addThisText']. It should be sanitized with encodeURIComponent().
  response.write(
    `   <!doctype html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>XSS alert!</title>
            </head>
            <body>
                <p id="xss">Here be XSS!  queryObject['addThisText'] is now: </p>
                ${queryObject['addThisText']}
            </body >
            </html >
    `);
  console.log("queryObject['addThisText']: ", queryObject['addThisText']);
  response.end();
}).listen(3000);