// var string = prompt("Please enter any sentence");
// var newString = string.split("");
// for (var i = 0; i < string.length; i++) {
//   if (
//     newString[i] == "a" ||
//     newString[i] == "e" ||
//     newString[i] == "i" ||
//     newString[i] == "o" ||
//     newString[i] == "u"
//   ) {
//     newString[i] = "i";
//   }
// }
// console.log(string);

// console.log(newString.join(""));

// var heading = document.getElementById("h1");
// var div = document.getElementById("div");
// var divText = div.innerHTML;
// console.log((divText = heading.innerHTML));

// const letter = "ssemugenyi";
// function addLetter(letter) {
//   const newLetter = letter.split("");
//   newLetter.unshift(letter[0]);
//   newLetter.push(letter[0]);
//   console.log(newLetter.join(""));
// }
// addLetter(letter);

// let amount = 100000;
let newAmount = "";
function thousandSeparator(amount) {
  const updatedAmount = String(amount).split("");
  for (let i = updatedAmount.length - 1; i >= 0; i--) {
    if (
      i % 3 === (updatedAmount.length - 1) % 3 &&
      i != updatedAmount.length - 1
    ) {
      newAmount += ",";
    }
    newAmount += updatedAmount[i];
  }
}
thousandSeparator(1000);
console.log(newAmount);
console.log(newAmount.split("").reverse().join(""));
