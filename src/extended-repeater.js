const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let subStr = '';
  if (options.addition || options.addition === false || options.addition === null) subStr += `${options.addition}`;
  if (options.additionRepeatTimes) {
    for (let i = 1; i < options.additionRepeatTimes; i += 1) {
    subStr += options.additionSeparator ? `${options.additionSeparator}${options.addition}` : `|${options.addition}`;
    }
  }
  result = `${str}${subStr}`;
  subStr = result;
  if (options.repeatTimes) {
    for (let i = 1; i < options.repeatTimes; i += 1) {
      result += options.separator ? `${options.separator}${subStr}` : `+${subStr}`;
    }
  }
  return result;
}

module.exports = {
  repeater
};
