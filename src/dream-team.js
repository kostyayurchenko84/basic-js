const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if(members === undefined || !Array.isArray(members) || members.length === 0 ) {
    return false;
  }
  const clearNamesArray = members.filter(item => typeof item === 'string').map(name => name.trim()).filter(elem => elem.length > 0);
  const firstLettersArray = clearNamesArray.map(name => name[0].toUpperCase);
  return firstLettersArray.sort().join('');
}

module.exports = {
  createDreamTeam
};
