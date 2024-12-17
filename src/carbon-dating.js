const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(a) {
  console.log('дано ', a);
  if (typeof a !== 'string' || isNaN(+a) || +a <= 0) return false;
  console.log('туть');
  const result = Math.ceil(Math.log(MODERN_ACTIVITY / a) / (0.693 / HALF_LIFE_PERIOD));
  if (result < 0) return false;
  console.log('результат ', result);
  return result;
}

module.exports = {
  dateSample
};
