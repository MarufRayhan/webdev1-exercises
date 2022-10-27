const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    request.on("error", (err) => {
      console.error(err);
      response.statusCode = 400;
      response.end();
    });

    if (request.url === "/" || request.url === undefined) {
      fs.readFile(`${__dirname}/index.html`, function (error, file) {
        if (error) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        } else {
          // TODO: modify Content Security
          // Policy header value as required
          response.writeHead(200, {
            "Content-Security-Policy":
              "img-src 'self' *.staticflickr.com *.creativecommons.org; script-src 'self'",
          });
          response.write(file);
        }
        response.end();
      });
    } else if (request.url === "/js/let_me_run.js") {
      fs.readFile(`${__dirname}/js/let_me_run.js`, function (error, file) {
        if (error) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        } else {
          response.writeHead(200, { "Content-Type": "text/javascript" });
          response.write(file);
        }
        response.end();
      });
    } else {
      response.statusCode = 404;
      response.statusMessage = "Requested content not found";
      response.end(`${response.statusCode} - ${response.statusMessage}`);
    }
  })
  .listen(3000);
