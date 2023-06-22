// First need to get the loan amount
// the cost to pay each year
// how long will the loan last

const readline = require("readline-sync");

function prompt(msg) {
  console.log("=>" + msg);
}
function invaildNumber(num) {
  return num.trim() === "" || num < 0 || Number.isNaN(Number(num));
}

prompt(" Welcome to Mortage Calculator!");

while (true) {
  prompt(" ----------------------------------");
  prompt(" What is the loan amount?");
  let loanAmount = readline.question();
  while (invaildNumber(loanAmount)) {
    prompt("Enter a postive number!");
    loanAmount = readline.question();
  }
  prompt(" What is the intrest rate you want?");
  prompt(" Example: 5 is 5% or 2.5 is 2.5%");
  let intrestRate = readline.question();
  while (invaildNumber(intrestRate)) {
    prompt("Enter a postive number!");
    intrestRate = readline.question();
  }
  prompt(" How long is the loan duration? ");
  let loanDuration = readline.question();
  while (invaildNumber(loanDuration)) {
    prompt("Enter a postive number!");
    loanDuration = readline.question();
  }
  let annualInterestRate = Number(intrestRate) / 100;
  let monthlyInterestRate = Number(annualInterestRate) / 12;
  let loanTime = Number(loanDuration) * 12;
  // m = monthly payment
  // p = loan amount
  // j = monthly interest rate
  // n = loan duration in months
  let monthlyPayment =
    loanAmount *
    (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanTime)));

  prompt(" Your monthly payment is " + '$' + monthlyPayment.toFixed(2));
  prompt(" Would you like to do another calculation?");
  let userAnswer = readline.question().toLowerCase();

  while (userAnswer !== "yes" && userAnswer !== "no") {
    prompt("MUST ANSWER YES OR NO!");
    userAnswer = readline.question().toLowerCase();
  }
  if (userAnswer === "no") break;
}
