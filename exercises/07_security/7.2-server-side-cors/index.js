const http = require("http");
const port = 3000;

http
  .createServer((req, res) => {
    if (req.headers.origin == null) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.write("Origin header not in the request");

      res.end();
      return;
    }
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "HEAD, GET, POST",
      "Access-Control-Max-Age": 7200,
    };

    if (
      req.method === "HEAD" ||
      req.method === "GET" ||
      req.method === "POST"
    ) {
      res.writeHead(200, headers);
      res.end("I was requested using CORS!");
      return;
    }

    if (!req.headers["origin"]) {
      res.writeHead(400, headers);
      res.end("Origin header not in the request");
      return;
    }

    res.writeHead(405, headers);
    res.end(`Request used a HTTP method which is not allowed.`);
  })
  .listen(port);
