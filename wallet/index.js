const { INITITAL_BALANCE } = require ('../config');
const ChainUtil = require('../chain-util');

class Wallet {
  constructor () {
    this.balance = INITITAL_BALANCE;
    this.keyPair = ChainUtil.genKeyPair();
    this.publicKey = this.keyPair.getPublic().encode('hex');
  }

  toString() {
    return `Wallet -
      Public Key:${this.publicKey.toString()}
      Balance   :${this.balance}`
  }
}

module.exports = Wallet;