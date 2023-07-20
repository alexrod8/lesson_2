const readline = require("readline-sync");
const validChoices = ["rock", "paper", "scissors", "lizard", "spock"];

function prompt(msg) {
  console.log("=> " + msg);
}

prompt("Welcome to Rock/Paper/Scissors/Lizard/Spock!");

while (true) {
  prompt("--------------------------------");
  prompt("Choose one: Rock, Paper, Scissors, Lizard, Spock?");
  let myChoice = readline.question().toLowerCase();

  while (!validChoices.includes(myChoice)) {
    prompt(
      "Invalid choice! Please choose Rock, Paper, Scissors, Lizard, or Spock."
    );
    myChoice = readline.question().toLowerCase();
  }

  let randomNumber = Math.floor(Math.random() * 5);
  let computerChoice = validChoices[randomNumber];

  prompt("You chose " + myChoice + ". Computer chose " + computerChoice + ".");

  if (
    (myChoice === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (myChoice === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (myChoice === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (myChoice === "lizard" &&
      (computerChoice === "paper" || computerChoice === "spock")) ||
    (myChoice === "spock" &&
      (computerChoice === "rock" || computerChoice === "scissors"))
  ) {
    prompt("You win!");
  } else if (myChoice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }

  prompt("Would you like to play again? (yes/no)");
  let answer = readline.question().toLowerCase();

  while (answer !== "yes" && answer !== "no") {
    prompt("Invalid answer! Please enter 'yes' or 'no'.");
    answer = readline.question().toLowerCase();
  }

  if (answer === "no") {
    prompt("Thanks for playing!");
    break;
  }
}
