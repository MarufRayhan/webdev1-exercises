const http = require("http");
const port = 3000;

http
  .createServer((req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Max-Age": 7200,
    };

    const originName = req.headers["origin"];

    if (!req.headers[originName]) {
      res.writeHead(400);
      res.end("Origin header not in the request");
      return;
    }

    if (req.method === "OPTIONS") {
      res.writeHead(200, headers);
      res.end();
      return;
    }

    if (["HEAD"].indexOf(req.method) > -1) {
      res.writeHead(200, headers);
      res.end();
      return;
    }

    if (["GET", "POST"].indexOf(req.method) > -1) {
      res.writeHead(200, headers);
      res.end("I was requested using CORS!");
      return;
    }

    res.writeHead(200, headers);
    res.end(`${req.method} is not allowed for the request.`);

    // TODO: handle HEAD HTTP method,
    // remember to add CORS headers to response

    // TODO: handle HTTP methods that are not allowed,
    // remember to add CORS headers to response

    // HINT: remember to use end() method of the response when you are ready to send them. If you are using if-else statements, place
    // "return;"
    // as the last line of all if-else branches.
    // So, something like:
    // if(condition){
    //     ....
    //     response.end();
    //     return;
    // }
    // else if(condition){
    //     ....
    //     response.end();
    //     return;
    // }
    // else{
    //     ....
    //     response.end();
    //     return;
    // }
  })
  .listen(port);
