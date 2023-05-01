// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Peform the operation on the two numbers
// Print the result to the terminal
const readline = require("readline-sync");

function prompt(msg) {
  console.log("=> " + msg);
}
function invaildNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt("Welcome to Alex's Calculator!");

prompt("Whats the first number? ");
let num1 = readline.question();

while (invaildNumber(num1)) {
  prompt("Hmmm... that doesnt look like a valid number");
  num1 = readline.question();
}

prompt("Whats the second number? ");
let num2 = readline.question();

while (invaildNumber(num2)) {
  prompt("Hmmm... that doesnt look like a valid number");
  num2 = readline.question();
}

prompt(
  "What operation would you like to peform?\n 1) add 2) subtract 3) multiply 4) divide: "
);
let operation = readline.question();
while (!['1','2','3','4'].includes(operation)) {
  prompt("MUST CHOOSE 1,2,3 OR 4");
  operation = readline.question();
}

let outPut;
switch (operation) {
  case "1":
    outPut = Number(num1) + Number(num2);
    break;
  case "2":
    outPut = Number(num1) - Number(num2);
    break;
  case "3":
    outPut = Number(num1) * Number(num2);
    break;
  case "4":
    outPut = Number(num1) / Number(num2);
    break;
}

prompt("Result: " + outPut);
