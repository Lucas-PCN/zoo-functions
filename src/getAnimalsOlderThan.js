const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const obj = species.find((element) => element.name === animal);
  return obj.residents.every((item) => item.age >= age);
}

module.exports = getAnimalsOlderThan;
