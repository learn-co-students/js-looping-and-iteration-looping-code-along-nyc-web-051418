// Code your solutions in this file

function printBadges(employee_name_array) {

    for (let i = 0; i < employee_name_array.length; i++) {
        console.log(`Welcome ${employee_name_array[i]}! You are employee #${i + 1}.`)
    }
    return employee_name_array
}


function tailsNeverFails () {
  let streak = 0
  while (maybeTrue ()) {
    streak++;
  }
  return `You got ${streak} tails in a row!`;
}

function maybeTrue () {
  return Math.random() >= 0.5;
}
