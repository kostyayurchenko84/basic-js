const { NotImplementedError, test } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount( s1, s2 ) {
  let countS1 = {};
  s1.split('').forEach((char) => {
    countS1[char] = (countS1[char] || 0) + 1;
  });
  let countS2 = {};
  s2.split('').forEach((char) => {
    countS2[char] = (countS2[char] || 0) + 1;
  });

  let commonCount = 0;
  Object.keys(countS1).forEach(key => {
    if(countS2[key]){
      commonCount += Math.min(countS1[key],countS2[key]);
    }
  })
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
