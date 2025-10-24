const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = Array.from({ length: matrix.length }, () => []);
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[0].length; k++) {
      let tmp = 0;
      if (matrix[i][k] === true) result[i][k] = 1;
      else {
        if (k + 1 < matrix[0].length && matrix[i][k + 1]) tmp += 1;
        if (i + 1 < matrix.length && k + 1 < matrix[0].length && matrix[i + 1][k + 1]) tmp += 1;
        if (i + 1 < matrix.length && matrix[i + 1][k]) tmp += 1;
        if (k - 1 >= 0 && i + 1 < matrix.length && matrix[i + 1][k - 1]) tmp += 1;
        if (k - 1 >= 0 && matrix[i][k - 1]) tmp += 1;
        if (i - 1 >= 0 && k - 1 >= 0 && matrix[i - 1][k - 1]) tmp += 1;
        if (i - 1 >= 0 && matrix[i - 1][k]) tmp += 1;
        if (i - 1 >= 0 && k + 1 < matrix[0].length && matrix[i - 1][k + 1]) tmp += 1;
        result[i][k] = tmp;
      } 
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
