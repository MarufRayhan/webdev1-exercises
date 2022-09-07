function hellomocha() {
  console.log("Hello Mocha!")
}


hellomocha();


/**
 * Below is the grade(answer, maxPoints) function that will be tested by Mocha.
 * The test reside in file /exercises/01_tools/test/mocha.test.js.
 * Some of the tests pass gracefully, but three of them fail. 
 * 
 * Examine the tests, and fix grade() function accordingly,
 * In grading points are given when a test is passed, maximum points are given when all the tests pass. 
 * 
 * The first test checks that maxPoint is an uneven number equal to 5 or a multiple of 5
 * The second test check that the answer is an object
 * The rest check that a right amount of points are given.
 * 
 * TODO: fix the code below, so that all tests pass.
 * 
 * @param answer a JavaScript object
 * @param maxPoints the maximum points that can be reached.
 * 
 * @return received points that can range 0..maxPoints
 */
module.exports = {
  grade(answer, maxPoints) {
    let points = 0;

    if (!Number.isInteger(maxPoints) || maxPoints < 5 || maxPoints % 5 !== 0) {
      // maxPoints must be an positive integer
      // divisible by 5
      return points;
    }

    if (typeof answer !== 'object') {
      return points;
    }

    // we get the answer text from the 
    // JavaScript object's property 
    // named "value"
    const answerText = answer.value.toLowerCase();

    if (answerText.includes('mocha') && !answerText.includes('hi')) {
      points += maxPoints / 5;
    }
    if (answerText.includes('hi') && !answerText.includes('mocha')) {
      points += maxPoints / 5;
    }
    if (answerText.includes('mocha') && answerText.includes('hi')) {
      points = maxPoints;
    }

    return points;
  }
};