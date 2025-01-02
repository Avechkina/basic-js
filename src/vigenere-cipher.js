const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) { 
    this.isDirect = isDirect;
    this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let indexOfKey = 0;
     for (let i = 0; i < str.length; i++) {
      if (this.abc.includes(str[i])) {
        let index = (this.abc.indexOf(str[i]) + this.abc.indexOf(key[indexOfKey % key.length])) % 26;
        result += this.abc[index];
        indexOfKey++;
      } else {
        result += str[i];
      }
    }
    if (!this.isDirect) result = result.split('').reverse().join('');
    return result;
  }
  decrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let indexOfKey = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.abc.includes(str[i])) {
        let index = (this.abc.indexOf(str[i]) - this.abc.indexOf(key[indexOfKey % key.length]) + 26) % 26;
        result += this.abc[index];
        indexOfKey++;
      } else {
        result += str[i];
      }
    }
    if (!this.isDirect) result = result.split('').reverse().join('');
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
