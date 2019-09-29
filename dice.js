// There are 1111 ways in which five -  6 sided dice(sides numbered 1 to 6) can be rolled so that the top three sum to 15.

// Some examples are:

// D1,D2,D3,D4,D5 =

// 4,3,6,3,5
// 4,3,3,5,6
// 3,3,3,6,6
// 6,6,3,3,3

// you can have 10 dice, 10 sides

// your answer should come back under 10 seconds.

const dice = 3;
const sides = 3;
const topNDice = 3;
const sumTo = 15;

const processDice = startingNumber => {
  console.log("startingNumber: ", startingNumber);
  for (let d = 0; d < dice; d++) {
    console.log("d: ", d);
    for (let s = 0; s < sides; s++) {
      console.log(startingNumber + (Math.pow(10, d) + s));
    }
    startingNumber += Math.pow(10, d);
  }
  return startingNumber;
};

let startingNumber =
  Number(
    Array(dice)
      .fill(1)
      .join("")
  ) - 1;

processDice(startingNumber);
