// Code your solutions in this file
function printBadges(employees) {
  for (let i = 0; i <  employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees;
}

function tailsNeverFails() {
  let count = 0
  function maybeTrue () {
    return Math.random() >= 0.5;
  }
  while (maybeTrue()) {
    count++;
  }
  return `You got ${count} tails in a row!`;
}
