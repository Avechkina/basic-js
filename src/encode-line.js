const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(str) {
  let result = '';
  if (str.length === 0) return result;
  let tmp = 1;
  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      tmp += 1
    } else {
      result = tmp === 1 ? `${result}${str[i-1]}` : `${result}${tmp}${str[i-1]}`;
      tmp = 1;
    }
  }
  result = tmp === 1 ? `${result}${str[str.length - 1]}` : `${result}${tmp}${str[str.length - 1]}`;
  return result;
}

module.exports = {
  encodeLine
};
