/**
 * TODO: drawArrows uses recursion, but this time
 * with Promise, resolve() and setTimeout()
 * 
 * @param {*} actors the actors (labels on vertical lines) to be drawn
 * @param {*} timeout time for setTimeot
 * @param {*} drawArrow the callback for drawing a single array
 * @param {*} i the index of an array
 */
async function drawArrows(actors, timeout, drawArrow, i = 0) {
  // TODO: uncomment return statement with the conditional operator at the bottom of this function. MDN Conditional operator:  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).
  // The conditional operator has:
  // * a condotion where i < actors.length * 2 - 2
  // * a Promise as the truthy expression, and 
  // * null as the the falsy expression.

  // TODO: conditional operator is fine  otherwise, but you must write the *resolve* callback function for the Promise in the conditional operator. Inside this resolve callback:
  // * call drawArrow() with right parameters
  // create a setTimeout(), its callback function is the Promise's resolve callback
  // this callback calls drawArrows() with the right parameters, after the set timeout period.

  //   return i < actors.length * 2 - 2 ? new Promise() : null;
};



/**
 * DO NOT TOUCH THIS: drawArrowSync is the utility function for sync.test.js
 * The test just checks the accuracy of drawing, this is done synchronously,
 * the functionality is just partial, do not use as a model above.
 * @param {*} actors the actors for the sequence diagram
 * @param {*} drawArrow a callback to draw an arrow
 */
const drawArrowsSync = (actors, drawArrow) => {
  actors.forEach((actor, index) => drawArrow(index, -1, actors.length - 1));
}



/**
 * DO NOT TOUCH THIS:  Draws all, both actors and arrows, this function is for a browser use.
 * Makes UML seq diagram based on actors
 * @param {*} actors 
 * @param {*} timeout 
 */
const drawAll = (actors = ["mobile client", "router", "controller", "model", "mongoDB"], timeout = 200) => {
  draw = getCanvasInBrowser();
  drawActors(actors);
  drawArrows(actors, timeout, drawArrow);
}

exports.drawArrows = drawArrows; //needed for testing, 'exports' causes "Uncaught ReferenceError: exports is not defined" that can be ignored
exports.drawArrowsSync = drawArrowsSync; //needed for testing, 'exports' causes "Uncaught ReferenceError: exports is not defined" that can be ignored