const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeObject = employees.find((element) => element.id === id);
  const firstAnimal = employeeObject.responsibleFor[0];
  const animalObject = species.find((element) => element.id === firstAnimal);
  let array = [];
  let animalAge = 0;
  animalObject.residents.forEach((element) => {
    if (element.age > animalAge) {
      animalAge = element.age;
      array = [element.name, element.sex, element.age];
    }
  });
  return array;
}

module.exports = getOldestFromFirstSpecies;
