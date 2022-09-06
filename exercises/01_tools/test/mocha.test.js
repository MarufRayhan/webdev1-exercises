'use strict';

const chai = require('chai');
const expect = chai.expect;

const Hello = require('../hellomocha');

describe('Hi Mocha tests', function() {
  describe('grade() function...', function() {
    it('should return 0 (zero) if answer is not an object', function() {
      const answers = [1, undefined, "a", true, Symbol(), NaN];
      const maxPoints = 10;

      answers.forEach((answer) => {
        const grade = Hello.grade(answer, maxPoints);
        expect(grade).to.equal(0);
      });
    });

    it('should return 0 (zero) if maxPoints is not an integer', function() {
      const answer = { value: 'himocha!' };
      const points = [
        '',
        1.1,
        undefined,
        {},
        [],
        true,
        Symbol(),
        NaN
      ];

      points.forEach((maxPoints) => {
        const grade = Hello.grade(answer, maxPoints);
        expect(grade).to.equal(0);
      });
    });

    it('should return 0 (zero) if "maxPoints < 5"', function() {
      const answer = { value: 'hi mOcha!' };
      const points = [-1, 0, 1, 2, 3, 4];

      points.forEach((maxPoints) => {
        const grade = Hello.grade(answer, maxPoints);
        expect(grade).to.equal(0);
      });
    });

    it('should return 0 (zero) if "maxPoints is not a number divisible by 5"', function() {
      const answer = { value: 'HI Mocha!' };
      const points = [3, 11, 19];

      points.forEach((maxPoints) => {
        const grade = Hello.grade(answer, maxPoints);
        expect(grade).to.equal(0);
      });
    });

    it('should return 0 (zero) when answer is empty', function() {
      const answer = { value: "" };
      const maxPoints = 10;

      const grade = Hello.grade(answer, maxPoints);
      expect(grade).to.equal(0);
    });

    it('should return 0 (zero) when answer does not contain either "Mocha!" or "Hi"', function() {
      const answer = { value: 'x' };
      const maxPoints = 10;

      const grade = Hello.grade(answer, maxPoints);
      expect(grade).to.equal(0);
    });

    it('should return maxPoints/5 when answer contains "Mocha" but not "Hi"', function() {
      const answers = [{ value: 'mocha' }, { value: 'Mocha' }, { value: ' MOCHA' }, { value: 'mocha!' }, { value: 'Mocha!' }, { value: ' MOCHA!' }];
      const maxPoints = 10;

      answers.forEach((answer) => {
        const grade = Hello.grade(answer, maxPoints);
        expect(grade).to.equal(maxPoints / 5);
      });
    });

    it('should return maxPoints/5 when answer contains "Hi" but not "Mocha!"', function() {
      const answers = [
        { value: 'hi' },
        { value: 'HI' },
        { value: ' hi' },
        { value: 'HI ' },
        { value: ' hi ' },
        { value: 'aAHIAa' }
      ];
      const maxPoints = 10;

      answers.forEach((answer) => {
        const grade = Hello.grade(answer, maxPoints);
        expect(grade).to.equal(maxPoints / 5);
      });
    });

    it('should return maxPoints when answer contains both "Mocha!" and "Hi"', function() {
      const answers = [
        { value: 'hiMocha!' },
        { value: 'Mocha!HI' },
        { value: 'Mocha! hi' },
        { value: 'HI Mocha!' },
        { value: ' Mocha! hi ' },
        { value: 'aMocha!HioAa' }
      ];
      const maxPoints = 10;

      answers.forEach((answer) => {
        const grade = Hello.grade(answer, maxPoints);
        expect(grade).to.equal(maxPoints);
      });
    });
  });
});
