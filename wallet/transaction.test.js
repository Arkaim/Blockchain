const Transaction = require('./transaction.js');
const Wallet = require('./index.js');

describe('Transaction', () => {
  let transaction, wallet, recipient, amount;

  beforeEach (() => {
    wallet = new Wallet();
    amount = 50;
    recipient = 'r1c1p13nt';
    transaction = Transaction.newTransaction(wallet, recipient, amount);
  });

  it('inputs the balance of the wallet', () => {
    expect(transaction.input.amount).toEqual(wallet.balance);
  });

  it('outputs the `amount` subtracted from the wallet balance', () => {
    expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount).toEqual(wallet.balance - amount);
  });

  it('outputs the `amount` added to the recipient', () => {
    expect(transaction.outputs.find(output => output.address === recipient).amount).toEqual(amount);
  });
})
