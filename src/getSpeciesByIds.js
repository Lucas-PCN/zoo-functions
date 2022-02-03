const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const array = [];
  ids.forEach((item) => {
    const obj = species.find((element) => element.id === item);
    array.push(obj);
  });
  return array;
}

module.exports = getSpeciesByIds;
