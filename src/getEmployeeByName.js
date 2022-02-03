const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const func = (element) => element.firstName === employeeName || element.lastName === employeeName;
  return employees.find(func);
}

module.exports = getEmployeeByName;
