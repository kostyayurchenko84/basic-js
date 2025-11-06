const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const numToStr = String(n);
  let max = -Infinity;
  for(let i=0;i<numToStr.length;i+=1){
    const temp = numToStr.slice(0, i) + numToStr.slice(i + 1);
    currentNum = parseInt(temp, 10);
    if(currentNum > max) {
      max = currentNum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
