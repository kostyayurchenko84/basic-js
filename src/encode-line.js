const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine( str ) {
  if(str.length === 0 || str === null || str === undefined) return '';
  let encodeStr = '';
  let count = 1;
  let currentLetter = str[0];
  for(let i=1;i<str.length;i+=1) {
    if(currentLetter === str[i])
      count++;
    else {
      if(count === 1) {
        encodeStr += currentLetter;
      }
      else {
        encodeStr += count + currentLetter;
      }
      count = 1;
      currentLetter = str[i];
    }
  }
  if(count === 1) {
    encodeStr += currentLetter;
  }
  else {
    encodeStr += count + currentLetter;
  }
  return encodeStr;
}

module.exports = {
  encodeLine
};
