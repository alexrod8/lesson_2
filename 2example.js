// First need to get the loan amount
// the cost to pay each year
// how long will the loan last

const readline = require("readline-sync");

function prompt(msg) {
  console.log('=>' + msg);
}

function invaildNumber(num) {
  return num.trim() === "" || num < 0 || Number.isNaN(Number(num));
}
prompt(` Welcome to Alex's Mortage Calculator!`);
while (true) {
  prompt(" --------------------------------------");
  prompt(" Whats the loan amount?");
  let loanAmount = readline.question();
  while (invaildNumber(loanAmount)) {
    prompt(" Enter a vaild and positive Number!");
    loanAmount = readline.question();
  }
  prompt(" Whats the intrest rate?");
  prompt(" Example: 5 is 5% and 2.5 is 2.5%");
  let interestRate = readline.question();
  while (invaildNumber(interestRate)) {
    prompt(" Enter a vaild and positive Number!");
    interestRate = readline.question();
  }
  prompt(" How long is the loan duration?");
  let loanDuration = readline.question();
  while (invaildNumber(loanDuration)) {
    prompt(" Enter a vaild and positive Number!");
    loanDuration = readline.question();
  }
  // m = monthly payment
  // p = loan amount
  // j = monthly interest rate
  // n = loan duration in months

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let loanTime = Number(loanDuration) * 12;
  let monthlyPayment =
    loanAmount *
    (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanTime)));
  prompt("Your monthly payment will be $" + monthlyPayment.toFixed(2));
  
  prompt("Would you like to do another Calculation?");
  let answer = readline.question().toLowerCase();
  while (answer !== "yes" && answer !== "no") {
    prompt("MUST ENTER YES OR NO!");
    answer = readline.question();
  }
  if (answer === "no") break;
}
