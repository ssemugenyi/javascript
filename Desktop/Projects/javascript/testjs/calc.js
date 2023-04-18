console.log("calculator programme");
console.log("add numbers");
console.log("subtract numbers");
console.log("multiply numbers");
console.log("divide numbers");
function calc() {
  var userinput = prompt("what is your choice");
  var userinput1 = prompt("enter the firstnumber");
  var userinput2 = prompt("enter the second number");
  if (userinput == 1) {
    console.log(parseInt(userinput1) + parseInt(userinput2));
    addMore();
  } else if (userinput == 2) {
    console.log(userinput1 - userinput2);
    addMore();
  }
  if (userinput == 3) {
    console.log(userinput1 * userinput2);
    addMore();
  }
  if (userinput == 4) {
    console.log(userinput1 / userinput2);
    addMore();
  }
}
function addMore() {
  var addMore = prompt("Do you want to add more ?");
  if (addMore == "y" || addMore.toUpperCase() == "Y") {
    calc();
  }
}
calc();
