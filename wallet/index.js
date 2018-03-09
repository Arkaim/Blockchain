const { INITITAL_BALANCE } = require ('../config');

class Wallet {
  constructor () {
    this.balance = INITITAL_BALANCE;
    this.keyPair = null;
    this.publicKey = null;
  }

  toString() {
    return `Wallet -
      Public Key:${this.publicKey.toString()}
      Balance   :${this.balance}`
  }
}

module.exports = Wallet;