const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  const arr = [...`${n}`];
  const numbers = arr.map((_, index) => +[...arr.slice(0, index), ...arr.slice(index + 1)].join(''));
  numbers.sort((a, b) => a - b);
 return numbers[numbers.length - 1];
}

module.exports = {
  deleteDigit
};
