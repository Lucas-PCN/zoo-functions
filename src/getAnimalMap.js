const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsLocations() {
  const obj = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((element) => {
    if (element.location === 'NE') {
      obj.NE.push(element.name);
    } else if (element.location === 'NW') {
      obj.NW.push(element.name);
    } else if (element.location === 'SE') {
      obj.SE.push(element.name);
    } else if (element.location === 'SW') {
      obj.SW.push(element.name);
    }
  });
  return obj;
}

const getResidents = (residents, sex, sorted) => {
  if (sex) {
    if (sorted) {
      return residents.filter((resident) => resident.sex === sex)
        .map((resident) => resident.name).sort();
    }
    return residents.filter((resident) => resident.sex === sex)
      .map((resident) => resident.name);
  }

  if (sorted) {
    return residents.map((resident) => resident.name).sort();
  }

  return residents.map((resident) => resident.name);
};

function animalsGroupedByLocation(filter) {
  const locAnimals = getAnimalsLocations();
  const locAnimalsKeys = Object.keys(locAnimals);
  const result = {};
  locAnimalsKeys.forEach((objKey) => {
    result[objKey] = species.filter((animal) => animal.location === objKey)
      .map((bixo) => ({ [bixo.name]: getResidents(bixo.residents, filter.sex, filter.sorted) }));
  });
  return result;
}

function getAnimalMap(options) {
  if (options === undefined) {
    return getAnimalsLocations();
  } if (options.includeNames === undefined) {
    return getAnimalsLocations();
  } if (options.includeNames !== undefined) {
    return animalsGroupedByLocation(options);
  }
}

module.exports = getAnimalMap;
