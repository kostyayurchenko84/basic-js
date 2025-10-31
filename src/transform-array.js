const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform( arr ) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const result = [];
  let discardNext = false;
  
  for(let i=0;i<arr.length;i+=1) {
    const item = arr[i];
    if(discardNext) {
      discardNext = false;
      continue;
    }
    switch(item){
      case "--discard-next":
        discardNext = true;
        break;
      case '--discard-prev':
        if (arr[i - 1] !== undefined && result.length > 0) {
          result.pop();
        }
        break;
      case "--double-next":
        if(i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (result[result.length - 1] !== undefined) {
          result.push(arr[i - 1]);
        }
        break;
      default:
        result.push(item);
    }
  }
  return result;
}

module.exports = {
  transform
};
