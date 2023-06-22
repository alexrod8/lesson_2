// First need to get the loan amount
// the cost to pay each year
// how long will the loan last
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

const readline = require("readline-sync");

function prompt(msg) {
  console.log("=> " + msg);
}

function invaildNumber(num) {
  return num.trim() === "" || num < 0 || Number.isNaN(Number(num));
}

prompt(" Welcome to Alex Mortgage Calculator!");

while (true) {
  prompt(" ----------------------------------- ");
  prompt("Whats the loan amount?");
  let loanAmount = readline.question();
  while (invaildNumber(loanAmount)) {
    prompt("Must enter a vaild and positive number!");
    loanAmount = readline.question();
  }
  prompt("Whats the intrest rate?");
  prompt("Example: 5 is 5% or 2.5 is 2.5%");
  let interestRate = readline.question();
  while (invaildNumber(interestRate)) {
    prompt("Must enter a vaild and positive number!");
    interestRate = readline.question();
  }
  prompt("How long is the loan duration(years)?");
  let loanDuration = readline.question();
  while (invaildNumber(loanDuration)) {
    prompt("Must enter a vaild and positive number!");
    loanDuration = readline.question();
  }
  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = Number(annualInterestRate) / 12;
  let loanMonths = Number(loanDuration) * 12;
  let monthlyPayment =
    Number(loanAmount) *
    (Number(monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -Number(loanMonths))));
  prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

  prompt("Would you like to do another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer !== "yes" && answer !== "no") {
    prompt("MUST ENTER YES OR NO!");
    answer = readline.question().toLowerCase();
  }
  if (answer === "no") {
    prompt("See you again next time!");
    break;
  }
}
