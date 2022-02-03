const data = require('../data/zoo_data');

function construtctArrayOfAnimals() {
  const arrayOfAnimals = data.species.map((specie) => specie.name);
  return arrayOfAnimals;
}

function constructArrayOfDays() {
  return Object.keys(data.hours);
}

function getAnimalsFromDay(day) {
  const objectAnimals = data.species.filter((specie) => specie.availability.includes(day));
  const arrayAnimals = objectAnimals.map((animal) => animal.name);
  return arrayAnimals;
}

function constructObjectInside(day) {
  const objectHour = data.hours[day];
  let stringHour = `Open from ${objectHour.open}am until ${objectHour.close}pm`;
  let arrayAnimals = getAnimalsFromDay(day);
  if (day === 'Monday') {
    stringHour = 'CLOSED';
    arrayAnimals = 'The zoo will be closed!';
  }
  const objectInside = { officeHour: stringHour, exhibition: arrayAnimals };
  return objectInside;
}

function dayParam(day) {
  const objectOutside = {};
  objectOutside[day] = constructObjectInside(day);
  return objectOutside;
}

function animalParam(animal) {
  const objectAnimal = data.species.find((specie) => specie.name === animal);
  return objectAnimal.availability;
}

function defaultParam() {
  const arrayOfDays = constructArrayOfDays();
  const objectOutside = {};
  arrayOfDays.forEach((day) => {
    objectOutside[day] = constructObjectInside(day);
  });
  return objectOutside;
}

function getSchedule(param) {
  const arrayOfAnimals = construtctArrayOfAnimals();
  const arrayOfDays = constructArrayOfDays();
  if (param === undefined || (!arrayOfAnimals.includes(param) && !arrayOfDays.includes(param))) {
    return defaultParam();
  }
  if (arrayOfAnimals.includes(param)) return animalParam(param);
  return dayParam(param);
}

module.exports = getSchedule;
