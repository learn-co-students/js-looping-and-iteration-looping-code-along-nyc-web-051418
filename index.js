// Code your solutions in this file

function printBadges(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`)
  }
  return arr;
}

function tailsNeverFails() {
  let flip = Math.random();
  let numTails = 0;
  console.log(flip);
  while (flip >= 0.5) {
    flip = Math.random();
    numTails++;
  }

  return  `You got ${numTails} tails in a row!`;
}
