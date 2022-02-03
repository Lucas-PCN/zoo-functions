const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function consctrutArrayOfEmployeeIds() {
  const arrayOfEmployeesIds = [];
  employees.forEach((employee) => arrayOfEmployeesIds.push(employee.id));
  return arrayOfEmployeesIds;
}

function constructArrayOfNames() {
  const arrayOfNames = [];
  employees.forEach((employee) => {
    arrayOfNames.push(employee.firstName);
    arrayOfNames.push(employee.lastName);
  });
  return arrayOfNames;
}

function getIdEmployee(name) {
  const objEmp = employees.find((employee) => employee.firstName === name
    || employee.lastName === name);
  return objEmp.id;
}

function hasError(key, value) {
  const arrayOfEmployeesIds = consctrutArrayOfEmployeeIds();
  const arrayOfNames = constructArrayOfNames();
  if (key === 'id') return !arrayOfEmployeesIds.includes(value);
  return !arrayOfNames.includes(value);
}

function constructObjEmployee(id) {
  const objEmp = employees.find((employee) => employee.id === id);
  const fullName = `${objEmp.firstName} ${objEmp.lastName}`;
  const species = [];
  const locations = [];
  objEmp.responsibleFor.forEach((idSpecie) => {
    const objAnimal = data.species.find((specie) => specie.id === idSpecie);
    species.push(objAnimal.name);
    locations.push(objAnimal.location);
  });
  const objEmployee = { id, fullName, species, locations };
  return objEmployee;
}

function constructArrayOfAllEmployees() {
  const arrayOfEmployeesIds = consctrutArrayOfEmployeeIds();
  const arrayAllEmployees = [];
  arrayOfEmployeesIds.forEach((employeeId) => {
    arrayAllEmployees.push(constructObjEmployee(employeeId));
  });
  return arrayAllEmployees;
}

function getEmployeesCoverage(objectParam) {
  if (objectParam === undefined) return constructArrayOfAllEmployees();
  const entries = Object.entries(objectParam);
  const [key, value] = entries[0];
  if (hasError(key, value)) throw new Error('Informações inválidas');
  let id;
  if (key === 'name') {
    id = getIdEmployee(value);
  } else { id = value; }
  return constructObjEmployee(id);
}

// coment;

module.exports = getEmployeesCoverage;
