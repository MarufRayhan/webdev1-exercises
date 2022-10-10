// TODO: Install testing packages with npm install

/**
 * TODO: implement an *async* function 'f' that returns the value of a parameter inside a Promise
 * @param {number} value, must be a number, isNaN() is useful here
 * @throws an error, if the parameter 'value' is not a number. The thrown error message must
 * be 'Parameter is not a number!'
 * @returns a new Promise, which resolves to the parameter value
 */
const f = async (value) => {
  if (!isNaN(value)) {
    return value;
  } else {
    throw "Parameter is not a number!";
  }
};

/**
 * TODO: Implement an async function 'g' that calls the previously made async function 'f'.
 * With then() function g waits for the result of f and returns the natural logarithm (Math.log()) of f's value.
 * Handle exceptions gracefully by returning the thrown error message with catch().
 * @param {number} value
 */

const g = (value) => {
  return f(value)
    .then((data) => {
      return Math.log(data);
    })
    .catch((err) => {
      "err";
    });
};
/**
 * TODO: Implement an async function 'checkIfFunction'.
 * The function checks the type of a parameter. typeof is useful here.
 * However, since we are now practicing
 * Promises, the value is returned as a "promisified" value
 * @param {*} param the value is checked to be a function
 * @returns resolved Promise with value true if parameter is a function or
 * a rejected Promise with message "Not a function!" otherwise
 */

// const checkIfFunction = (param) => {
//   throw "Not yet implemented!";
// };s

// const checkIfFunction = (param) => {
//   return new Promise((resolve, reject) => {
//     if (typeof param === "function") {
//       resolve(value);
//     } else {
//       reject(new Error("Not a function!"));
//     }
//   });
// };

const checkIfFunction = (param) => {
  if (param instanceof Function) {
    return true;
  } else {
    throw "Not a function!";
  }
};

/**
 * TODO: Implement a function 'p' that returns a resolved Promise after a given time.
 * If time > 2000 milliseconds, the Promise must be rejected with message "Too long time!".
 * If time is not a number the Promise must be rejected with message "Not a number!".
 * @param {number} time
 * @returns {an empty Promise after a given time}, if time is acceptable
 */

// const p = (time) => {
//   throw "Not yet implemented!";
// };

const p = (time) => {
  return new Promise((resolve, reject) => {
    // if the duration is negative, reject the promise immediately

    setTimeout(function () {
      return resolve();
    }, time);

    if (time > 2000) {
      throw "Too long time!";
    }
    if (typeof time !== "number") {
      throw "Not a number!";
    }

    // // resolve the promise when the wait is over
    // setTimeout(resolve, time);
  });
};

//TODO: verify that all functions exported below are available for tests (they should be)
exports.f = f;
exports.g = g;
exports.checkIfFunction = checkIfFunction;
exports.p = p;

// TODO: Run the tests with npm test
