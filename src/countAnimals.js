const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const listAnimals = {};
    species.forEach((element) => {
      listAnimals[element.name] = element.residents.length;
    });
    return listAnimals;
  }
  if (animal.specie !== undefined && animal.sex === undefined) {
    const obj = species.find((item) => item.name === animal.specie);
    return obj.residents.length;
  }
  const obj = species.find((item) => item.name === animal.specie);
  const arrayResult = obj.residents.filter((element) => element.sex === animal.sex);
  return arrayResult.length;
}

module.exports = countAnimals;
