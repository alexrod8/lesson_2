// ask the user for first number
// ask the user for second number
// Ask user for opreation of choice
// Peform the operation of two numbers
// print result to terminal

const readline = require("readline-sync");

function prompt(message) {
  console.log(` => ${message}`);
}

function invaildNumber(number) {
  return number.trimStart() === " " || Number.isNaN(Number(number));
}

prompt("Welcome to my Calculator!");

prompt("Whats the first number: ");
let num1 = readline.question();

while (invaildNumber(num1)) {
  console.log(`Oops.. that doesn't look like a vaild number`);
  num1 = readline.question(`A vaild Number: `);
}

prompt("Whats the second number: ");
let num2 = readline.question();

while (invaildNumber(num2)) {
  console.log(`Oops.. that doesn't look like a vaild number`);
  num2 = readline.question(`A vaild Number: `);
}

prompt(
  "What operation would you like to peform? \n1)Add 2)Subtract 3) Multiply 4) Divide"
);
let operation = readline.question();
while(!('1,2,3,4').includes(operation)) {
console.log(`It Has to be 1,2,3 or 4! `);
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

console.log("The result is " + outPut.toFixed());
