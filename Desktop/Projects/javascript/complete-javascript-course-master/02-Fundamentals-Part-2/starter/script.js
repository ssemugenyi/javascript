"use strict";
/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");
*/
/*
function logger() {
  console.log("My name is isaac");
}
// calling / running / invoking
logger();
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(4, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(5, 6);
console.log(appleOrangeJuice);
*/
/*
//function declartion
function calcAge(birthYear) {
  return 2022 - birthYear;
}
const age = calcAge(1998);
console.log(age);

//function expression
const age2 = function (birthYear) {
  return 2022 - birthYear;
};
console.log(age2(2002));
*/

//arrow function
/*
const age = (birthYear) => 2022 - birthYear;
console.log(age(2002));

const yearsUntilRetirement = (birthYear, fName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${fName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(2002, "shanita"));
console.log(yearsUntilRetirement(1998, "isaac"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
//coding challenge
const calcAvg = (score1, score2, score3) => {
  const avg = (score1 + score2 + score3) / 3;
  return avg;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas)
    return `Dolphin win (${avgDolphins} vs ${avgKoalas})`;
  else if (avgKoalas >= 2 * avgDolphins) {
    return `Dolphin win (${avgKoalas} vs ${avgDolphins})`;
  } else return `No winner`;
};
console.log(checkWinner(calcAvg(44, 23, 71), calcAvg(65, 54, 49)));
console.log(checkWinner(calcAvg(85, 54, 41), calcAvg(23, 34, 27)));
