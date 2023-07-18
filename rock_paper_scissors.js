// The user makes a choice.
// The computer makes a choice.
// The winner is displayed.

const readline = require("readline-sync");
const vaildChoices = ["rock", "paper", "scissors"];
function prompt(msg) {
  console.log("=> " + msg);
}

prompt("Welcome to the Rock/Paper/Scissors Game! ");

while (true) {
  prompt("------------------------------------------");
  prompt("Choose an item from rock, paper,scissors.");
  let choice = readline.question().toLowerCase();
  while (!vaildChoices.includes(choice)) {
    prompt("Thats not a vaild choice!");
    choice = readline.question().toLowerCase();
  }
  let randomIndex = Math.floor(Math.random() * 3);
  let computerChoice = randomIndex;
  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }

  prompt("You Choose " + choice + " Computer Choose " + computerChoice + "!");

  if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "paper")
  ) {
    prompt("You win!");
  } else if (
    (choice === "rock" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "rock")
  ) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie!");
  }
  prompt("Would you like to play again? ");
  let answer = readline.question().toLowerCase();
  if (answer !== "yes" && answer !== "no") {
    prompt("Must enter yes or no!");
    answer = readline.question().toLowerCase();
  }
  if (answer === "no") {
    prompt("Have a nice day!");
    break;
  }
}
