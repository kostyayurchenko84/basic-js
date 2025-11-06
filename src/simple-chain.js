const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink( value ) {
    let linkValue;
    if(value === undefined) {
      linkValue = '(  )';
    }
    else {
      linkValue = `( ${value} )`;
    }
    this.chain.push(linkValue);
    return this;
  },
  removeLink( position ) {
    if(typeof position !== 'number' || isNaN(position) || !Number.isInteger(position) || position < 1 || position > this.chain.length) {  
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join('~~');
    this.chain = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
