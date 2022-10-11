const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');

/**
 * users array
 * information about the only user in the system
 */
const users = [{
  username: 'good_user',
  password: 'good_pass',
  //  cookie_secret value is set to 
  // the cookie named 'secret_for_good_server', which is  
  // used to authenticate good_user when they have logged in. 
  cookie_secret: 1234567890
}]

/**
 * currentUser object
 *  This is where the currently logged in user is saved.
 * Only works for one-user systems.
 */
// 
let currentUser = {};

/**
 * csrfTokens array
 * This is where created CSRF tokens are stored
 * setCSRFtoken() function adds the tokens it creates to this array
 * checkCSRFtoken(token) function removes the tokens that are checked and valid from this array
 */
let csrfTokens = [];

http.createServer(function(request, response) {
  // Landing page, where user inputs their login credentials
  if (request.url === '/' || request.url === '') {
    fs.readFile(__dirname + '/good_server.html', function(error, htmlPage) {
      if (error) {
        response.writeHead(404);
        response.end(JSON.stringify(err));
        return;
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(htmlPage);
      }
      response.end();
      return;
    });
  }
  // The login page directs here, where user's credentials are checked
  else if (request.url === '/login' && request.method === 'POST') {
    let formBody = "";
    request.on('data', function(chunk) {
      formBody += chunk;
    });
    request.on('end', function() {
      const loginInput = querystring.parse(formBody);
      const userArray = checkUser(loginInput.username, loginInput.passw);
      if (userArray.length === 1) {
        currentUser = userArray[0];
        response.setHeader('Set-Cookie', ['secret_for_good_server=' + currentUser.cookie_secret]);
        response.end(
          `
                            <!doctype html>
                            <html lang="en">
                            
                            <head>
                                <meta charset="utf-8">
                                <title>The Good Server</title>
                            </head>
                            <body>
                                <p>You have now logged in!</p>
                                <p>You can move on to <a href="/money_transfer"> transferring money</a>.</p>
                            </body>
                            </html>
                            `
        );
        return;
      } else {
        response.statusCode = 403;
        response.statusMessage = "Wrong username and/or password!"
        response.end(`${response.statusCode} - Wrong username and/or password!`);
        return;
      }
    })
  } else if (request.url.match(/^\/money_transfer.*/)) {
    const cookies = querystring.parse(request.headers['cookie'], '; ');
    const query = url.parse(request.url, true).query;
    // Check that the user has a cookie, which is set after
    // successful login for user good_user
    if (cookies.secret_for_good_server != users[0].cookie_secret) {
      response.statusCode = 403;
      response.statusMessage = "Missing or wrong secret cookie";
      response.end('Missing or wrong secret cookie');
      return;
    }
    // Check that the input includes the three fields: 
    // 1. from
    // 2. to (indicating users), and
    // 3. sum
    // If not, send the user to the money transfer form again
    else if (!query.to || !query.sum) {
      response.writeHead(200, { 'Content-Type': 'text/html' });

      // TODO
      // Add an input field to the HTML form below to hold the CSRF token
      // As the hidden field is inside a template literal below, we could add expression with (from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals):       `string text ${expression} string text`
      // - set the input field's type attribute to "hidden"  
      // - set the input field's name attribute to "csrf_token" 
      //  - set the input field's value attribute to the return value of the setCSRFtoken() function. Remember to place the value attribute's value between apostrophe (") characters, for example value="{yourFunctionCallHere()}".
      response.end(
        ` 
                <!doctype html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>The Good Server</title>
                </head>
                <body>
                    <p>Transfer money to other users with the super safe form which uses the latest HTTP GET method!</p>
                    <form action="/money_transfer" method="get">
                        <div class="container">
                            <label for="from"><b>Transfer from</b></label>
                            <input type="text" value="good_user" name="from" required readonly>
                            <label for="to"><b>Transfer to</b></label>
                            <input type="text" placeholder="User you want to send money to" name="to" required>
                            <label for="sum"><b>Sum to transfer (in full Euros)</b></label>
                            <input type="number" placeholder="Enter a sum" name="sum" required>
                            <button type="submit">Transfer money</button>
                        </div>
                    </form>
                </body>
                </html>
                `
      );
      return;
    }
    // TODO
    // NOTE: before this TODO, implement the checkCSRFtoken() function at the end of this file
    // Here we check that the CSRF token returned by the checkCSRFtoken() is present in request, and  is a valid one
    // Just uncomment the else if block below, after you have coded your checkCSRFtoken() function at the end of this file
    // else if (checkCSRFtoken(query.csrf_token) === -1) {
    //     response.statusCode = 403;
    //     response.statusMessage = "Missing or wrong CSRF token";
    //     response.end('Missing or wrong CSRF token');
    //     return;
    // }
    else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(
        `
                <!doctype html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>The Good Server</title>
                </head>
                <body>
                    <p>The sum of ${query.sum} Euros was transferred from user good_user to user ${query.to}</p>
                    <p><a href="/money_transfer/">Perform another money transfer</a></p>            
                </body >
                </html >
            `

      );
      return;
    }
  } else {
    response.writeHead(404);
    response.write('Page not found or wrong HTTP method used');
    response.end();
    return;
  }
}).listen(3000);


/**
 * function checkUser
 * Used to check the login credentials user gave match those in users array
 * @param {*} userName username from request
 * @param {*} password password from the request
 * @returns {Array} A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned. 
 */
const checkUser = (userName, password) => {
  const userHopefully = users.filter((user) => {
    return (user.username === userName && user.password === password);
  })
  return userHopefully;
}

// TODO: implement the function as specified below
/**
 * function setCSRFtoken
 * Used to create and return a random string to be used as the value of the CSRF token 
 * After you have created the random string, push it to the csrfTokens array 
 * There are plenty of discussions in the Web about how plain JS can be used to generate random(ish) strings. For our needs Math.random() is a reasonable starting point, and string length of 10 characters is enough. You can use toString() and slice() methods to modify the output of Math.random() to a 10 character string. 
 * No function parameters
 * @returns {string} Return a random string used as the value of CSRF token
 */
const setCSRFtoken = () => {

}

// TODO: implement the function as specified below
/**
 * function checkCSRFtoken
 * Used to check that the CSRF token that was received with the money transfer form exists in the csrfTokens array. JavaScript Array's findIndex() method is useful here. 
 * If the CSRF token is found from the csrfTokens array, it must be removed from it. 
 * @param {string} token CSRF token from the request
 * @returns {number} The index of the first element in the array that passes the test. Otherwise, -1.
 */
const checkCSRFtoken = (token) => {

}