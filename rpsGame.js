// The user makes a choice.
// The computer makes a choice.
// The winner is displayed.

const readline = require("readline-sync");
const vaildChoices = ["rock", "paper", "scissors"];

function prompt(msg) {
  console.log("=> " + msg);
}

prompt("Welcome to Rock/Paper/Scissors!");

while (true) {
  prompt("--------------------------------");
  prompt("Choose one Rock, Paper, Scissors?");
  let myChoice = readline.question().toLowerCase();
  while (!vaildChoices.includes(myChoice)) {
    prompt("Not vaild Answer!");
    myChoice = readline.question().toLowerCase();
  }
  let randomNumber = Math.floor(Math.random() * 3);
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
  }
  prompt("You Choose " + myChoice + " Computer choose " + computerChoice + ".");
  if(myChoice === 'rock ' && computerChoice === 'scissors' || myChoice === 'paper' && computerChoice === 'rock' || myChoice === 'scissors' && computerChoice === 'paper'){
   prompt('You win!')
  } else if (computerChoice === 'rock' && myChoice === 'scissors' || computerChoice === 'paper' && myChoice === 'rock' || computerChoice === 'scissors' && myChoice === 'paper') {
   prompt('Computer wins!');
  } else {
    prompt('Tied.')
  } 
  prompt('Would you like to play again(yes/no)?')
  let answer = readline.question();
  while(answer !== 'yes' && answer !== 'no') {
   prompt('Need to answer with yes or no!'.toUpperCase());
   answer = readline.question();

  } if(answer === 'no') {
      prompt('Have a nice day!')
      break;
  }
}
