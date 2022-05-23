let ceo;
let manager;
let cto;
let developer;
let other;

function calculateSalary(role) {
  if (role === 'ceo') {
    return 'ceo => 2200€';
  }

  else if (role === 'manager') {
    return  'manager => 1800€';
  }

  else if (role === 'cto') {
    return  'manager => 1800€';
  }

  else if (role == 'developer' ) {
    return 'developer => 1500 €';
  }

  else {
    return 'default => 1000 €';
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');


console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);