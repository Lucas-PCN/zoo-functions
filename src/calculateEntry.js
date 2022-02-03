const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childs = entrants.filter((element) => element.age < 18);
  const adults = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const seniors = entrants.filter((element) => element.age >= 50);
  const object = {
    child: childs.length,
    adult: adults.length,
    senior: seniors.length,
  };
  return object;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const count = countEntrants(entrants);
  return count.child * prices.child + count.adult * prices.adult + count.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
