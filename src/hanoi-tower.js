const { NotImplementedError } = require('../lib');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi( disksNumber, turnsSpeed ) {
  return {
    turns: Math.pow(2, disksNumber) - 1,
    seconds: Math.floor((Math.pow(2, disksNumber) - 1) / turnsSpeed * 3600),
  }
  // Remove line below and write your code here
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  calculateHanoi
};
