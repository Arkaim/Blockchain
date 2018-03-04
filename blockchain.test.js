const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
  let bc;

  beforeEach(() => {
    bc = new Blockchain();
    bc2 = new Blockchain();
  });

  it ('starts  with the genesis block', () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it ('adds a new block', () => {
    const data = 'foo';
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
  });

  it ('validates a valid chain', () => {
    bc2.addBlock('foo');

    expect(bc2.isValidChain(bc2.chain)).toBe(true);
  });

})