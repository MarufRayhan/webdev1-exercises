const http = require('http');
const port = 3000;

http.createServer((req, res) => {
  // The following line 'res.end();'
  // is here to enable initial testing
  // with the server. 
  //  Important! Delete the line   'res.end();' when you start to write your own code!
  res.end();


  const headers = {
    /** TODO: add the required CORS headers 
     * you can define your CORS header with something
     *  like the following:
     * const yourCorsHeaders = {
        'header_1_name': 'header_1_value',
        'header_2_name': 'header_2_value',
        ...
        };
        This syntax enables using the defined CORS headers with  writeHead() method in the TODOs below. See writeHead() method parameters: (https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers).

    */
  };

  // TODO: check that Origin header is set in the request
  // You can access the header with req.headers['origin']
  // You can check if a header is present in request headers with if(!req.headers['yourHeaderNameHere']){..


  // TODO: handle GET and POST HTTP methods
  // You can use req.method to access the request method 
  // remember to add CORS headers to response, you can use writeHead() here 

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


}).listen(port);