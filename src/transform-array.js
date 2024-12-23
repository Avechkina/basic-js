const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const result = [];
  let i = 0;
  let isDeleted = false;
  while (i < arr.length) {
    if (arr[i] === '--double-next') {
      if (arr[i + 1]) {
        result.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 1] && !isDeleted) {
        result.push(arr[i - 1]);
      }
    } else if (arr[i] === '--discard-prev') {
      if (result.length > 0 && !isDeleted) result.pop();
    } else if (arr[i] === '--discard-next') {
      i += 1;
      isDeleted = true;
    } else {
      result.push(arr[i]);
      isDeleted = false;
    }
    i += 1;
  }
  return result;
}

module.exports = {
  transform
};
