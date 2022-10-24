const http = require("http");
const port = 3000;

http
  .createServer((req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, HEAD, OPTION",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": 1728000,
    };

    // TODO: check that Origin header is set in the request
    // You can access the header with req.headers['origin']
    const resHeader = req.headers["origin"];
    console.log(req.headers["origin"]);
    // You can check if a header is present in request headers with if(!req.headers['yourHeaderNameHere']){..

    if (!req.headers[resHeader]) {
      res.stausCode = 400;
      res.statusMessage = "Origin header not in the request";
    }
    // TODO: handle GET and POST HTTP methods
    // You can use req.method to access the request method
    // remember to add CORS headers to response, you can use writeHead() here
    if (req.method === "GET" || req.method === "POST") {
      res.writeHead(200, {
        "Access-Control-Allow-Methods": "GET, POST, PUT, HEAD",
      });
      res.end();
      return;
    } else if (req.method === "OPTION") {
      res.writeHead(
        "Access-Control-Allow-Methods",
        "GET",
        "PUT",
        "POST",
        "DELETE"
      );
      res.end();
      return;
    }

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
