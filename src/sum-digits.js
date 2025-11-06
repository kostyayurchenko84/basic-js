const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  if(n>=0 && n <= 9) {
    return n;
  }
  let current = n;
  while(current > 9) {
    let sum = 0;
    while(current > 0) {
      sum = sum + current % 10;
      current = Math.floor(current / 10);
    }
    current = sum;
  }
  return current;
}

module.exports = {
  getSumOfDigits
};
