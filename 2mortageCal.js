// First need to get the loan amount
// the cost to pay each year
// how long will the loan last
const readline = require("readline-sync");

function prompt(msg) {
  console.log("=> " + msg);
}

function invaildNumber(num) {
  return num.trim === "" || Number(num) < 0 || Number.isNaN(Number(num));
}
prompt("Welcome to Mortage Calculator!");

while (true) {
  prompt("- - - -- -- -- - ---- - - -- - - - -- - - -- - - - -- - - - ");
  prompt("Whats the loan amount? ");
  let amount = readline.question();
  while (invaildNumber(amount)) {
    prompt("Enter a positve number!");
    amount = readline.question();
  }
  prompt("What is the interest rate? ");
  prompt("Example: 5% is 5 and 2.5% is 2.5 ");
  let interestRate = readline.question();
  while (invaildNumber(interestRate)) {
    prompt("Enter a postive number! ");
    interestRate = readline.question();
  }
  prompt("How long is the loan duration(years)?");
  let loanTime = readline.question();
  while (invaildNumber(loanTime)) {
    prompt("Enter a postive number! ");
    loanTime = readline.question();
  }
  // m = monthly payment
  //p = loan amount
  //j = monthly interest rate
  //n = loan duration in months
  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = Number(annualInterestRate) / 12;
  let loanDuration = Number(loanTime) * 12;
  let monthlyPayment =
    Number(amount) *
    (monthlyInterestRate /
      (1 - Math.pow(1 + Number(monthlyInterestRate), Number(-loanDuration))));
  prompt("Your monthly payment is: " + "$" + monthlyPayment.toFixed(2));
  prompt("Would you like to another calculation? ");
  let answer = readline.question().toLowerCase();
  while (answer !== "yes" && answer !== "no") {
    prompt("Must answer yes or no!");
    answer = readline.question().toLowerCase();
  }
  if (answer === "no") {
    break;
  }
}
