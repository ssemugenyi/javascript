//type conversion
/*
const input = "1998";

console.log(Number(input) + 18);
*/

// type coercion
/*
console.log("i am " + 23 + " years old");
// '+' to strings, others to numbers.,
*/

// false and truth 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean("jonas"));
console.log(Boolean("isaac"));
console.log(Boolean(NaN));



const money = 100;
if (money) {
  console.log("Dont spend it all :)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

const favorite = prompt("What's your favorite");
console.log(favorite);
console.log(typeof favorite);
if (Number(favorite) === 23) {
  console.log("Its cool");
}
*/

//coding challenge 3
/*
const dolphinAvgScore = (98 + 108 + 89) / 3;
const koalasAvgScore = (88 + 91 + 110) / 3;

if (dolphinAvgScore > koalasAvgScore) {
  console.log("Dolhins are winners");
} else if (koalasAvgScore > dolphinAvgScore) {
  console.log("Loa;sa are winners");
} else if (dolphinAvgScore === koalasAvgScore) {
  console.log("It is a draw");
} else {
  console.log("No winner");
}
*/

//Bonus 1
/*
const dolphinAvgScore = (97 + 112 + 101) / 3;
const koalasAvgScore = (109 + 95 + 123) / 3;

if (dolphinAvgScore > koalasAvgScore && dolphinAvgScore >= 100) {
  console.log("Dolhins are winners");
} else if (koalasAvgScore > dolphinAvgScore && koalasAvgScore >= 100) {
  console.log("koalas are winners");
} else if (dolphinAvgScore === koalasAvgScore) {
  console.log("It is a draw");
} else {
  console.log("No winner");
}
*/

//bonus 2
/*
const dolphinAvgScore = (97 + 112 + 101) / 3;
const koalasAvgScore = (109 + 95 + 106) / 3;

if (dolphinAvgScore > koalasAvgScore && dolphinAvgScore >= 100) {
  console.log("Dolhins are winners");
} else if (koalasAvgScore > dolphinAvgScore && koalasAvgScore >= 100) {
  console.log("koalas are winners");
} else if (
  dolphinAvgScore === koalasAvgScore &&
  dolphinAvgScore >= 100 &&
  koalasAvgScore >= 100
) {
  console.log("It is a draw");
} else {
  console.log("No winner");
}
*/

//switch statement
/*
const day = "monday";

switch (day) {
  case "monday":
    console.log("I code in c ");
    break;
  case "tuesday":
    console.log("I code in js ");
    break;
  case "wednesday":
    console.log("I code in react ");
    break;
  case "thursday":
    console.log("I relax ");
    break;
  default:
    console.log("It is a weekend I rotate");
}
*/
//coding challenge

const bill = 430;
let tip, total;
bill > 50 && bill < 300
  ? console.log(
      `The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${
        bill + bill * 0.15
      }`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${
        bill + bill * 0.2
      }`
    );
