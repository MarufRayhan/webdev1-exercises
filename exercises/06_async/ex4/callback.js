/**
 * TODO: write recursive function drawArrows that uses drawArrow in ../misc/draw.js
 * The required functionality for this TODO can be achieved using the following:
 *  1. if statement with termination condition for the recursion, with right parameters
 *  2. the call to drawArrow function, with the right parameters
 *  3. a setTimeout calling drawArrows (notice the plural), with the right parameters 
 * The first thing you write inside drawArrows function below should be an if statement, the termination condition to return from this function. In the termination condition, you should compare parameter i to the length of actors parameter array. 
 * Notice that you will very likely go through many tries when finding the correct numeric modifiers for all the variables and parameters. Run the provided tests after each change to your code.
 * 
 * @param {*} actors the array of actors, these are the labels on the vertical lines in the sequence diagram 
 * @param {*} timeout time for setTimeout.
 * @param {*} drawArrow a callback function that is passed as a parameter for drawArrows (but not for setTimeout)
 * It draws only one arrow, the f expression must be 'drawArrow'
 * @param {*} i the index, the nth arrow to be drawn, note that the sequence has to return from destination back to the source
 */
const drawArrows = (actors, timeout, drawArrow, i = 0) => {}





/**
 * DO NOT TOUCH THIS drawArrowsSync: drawArrowSync is the utility function for sync.test.js
 * The test just checks the accuracy of drawing, this is done synchronously,
 * the functionality is just partial, do not use as a model above.
 * @param {*} actors the actors for the sequence diagram
 * @param {*} drawArrow a callback to draw an arrow
 */
const drawArrowsSync = (actors, drawArrow) => {
  actors.forEach((actor, index) => drawArrow(index, -1, actors.length - 1));
}



/**
 * DO NOT TOUCH drawAll: Draws all, both actors and arrows, this function is for a browser use.
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