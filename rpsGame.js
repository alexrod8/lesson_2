// The user makes a choice.
// The computer makes a choice.
// The winner is displayed.
//vaildChoices = ["rock", "paper", "scissors", "lizard", "spock"];
const readline = require("readline-sync");
let maxWins = 5;
function prompt(msg) {
  console.log("=> " + msg);
}
function ShortReponse(shortChoice) {
  switch (shortChoice) {
    case "r":
      return "rock";
      break;
    case "p":
      return "paper";
      break;
    case "s":
      return "scissors";
      break;
    case "l":
      return "lizard";
      break;
    case "sp":
      return "spock";
      break;
  }
}
prompt("Welcome to Rock/Paper/Scissors/Lizard and Spock!");
prompt("Best to Five wins!");

function scoreTracker(playerWins, computerWins) {
  prompt("Player Wins: " + playerWins);
  prompt("Computer Wins: " + computerWins);
}
let playerWins = 0;
let computerWins = 0;

//prompt("Welcome to Rock/Paper/Scissors/Lizard and Spock!");

while (true) {
  prompt("--------------------------------");
  prompt(
    "Choose one (r) = Rock , (p) = Paper , (s) = Scissors, (l) = Lizard , or (sp) = Spock?"
  );
  let myChoice = readline.question().toLowerCase();
  while (!ShortReponse(myChoice)) {
    prompt(
      "Invalid choice! Please choose Rock (r), Paper (p), Scissors (s), Lizard (l), or Spock (sp)."
    );
    myChoice = readline.question().toLowerCase();
  }
  myChoice = ShortReponse(myChoice);

  let randomNumber = Math.floor(Math.random() * 5);
  let computerChoice = randomNumber;
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
    case 3:
      computerChoice = "lizard";
      break;
    case 4:
      computerChoice = "spock";
      break;
  }

  prompt(
    "You Choose " + myChoice + ". Computer choose " + computerChoice + "."
  );
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
    playerWins++;
  } else if (computerChoice === myChoice) {
    prompt("You Tied.");
  } else {
    prompt("Computer wins!");
    computerWins++;
  }
  if (playerWins === maxWins || computerWins === maxWins) {
    prompt("Final scores");
    scoreTracker(playerWins, computerWins);
    prompt("Game over Thanks for playing!");
    break;
  }
  scoreTracker(playerWins, computerWins);
  prompt("Would you like to play again(yes/no)?");
  let answer = readline.question();
  while (answer !== "yes" && answer !== "no") {
    prompt("Need to answer with yes or no!".toUpperCase());
    answer = readline.question();
  }
  if (answer === "no") {
    prompt("Thanks for Playing!");
    break;
  }
}
