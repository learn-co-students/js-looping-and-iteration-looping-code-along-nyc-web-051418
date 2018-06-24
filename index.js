// Code your solutions in this file
function printBadges (arrayNames) {
  for (let i = 0; i < arrayNames.length ; i++) {
    console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`);
  }
  return arrayNames;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let tails = 0;
  while(maybeTrue()) {
     ++tails;
  }
  return `You got ${tails} tails in a row!`
}
