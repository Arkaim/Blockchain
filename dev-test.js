const Block = require ('./block')

const block = new Block('foo', 'bar', 'zoo', 'bus');

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());