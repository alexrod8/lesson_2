//ask the user to enter a interger greater than 0
//Then ask if user wants to find sum or product of all numbers between 1 and the entered integer
//if you enter s you will add
// if you enter p you are going to multiple

const input = require("readline-sync");

function program() {
  let interger = input.question("Please enter an integer greater than 0: ");
  while (Number.isNaN(Number(interger))) {
    interger = input.question("Please enter an integer greater than 0: ");
  }

  let answer = input.question(
    'Enter "s" to compute the sum, or "p" to compute the product: '
  );
  while (!["s", "p"].includes(answer)) {
    console.log("Please enter p or s! ");
    answer = input.question(
      'Enter "s" to compute the sum, or "p" to compute the product: '
    );
  }

  let sum = 0;
  let product = 1;

  if (answer === "s") {
    for (let i = 1; i <= interger; i++) {
      sum += i;
    }
    console.log(
      "The sum of the integers between 1 " + "and " + interger + " is " + sum
    );
  }
  if (answer === "p") {
    for (let i = 1; i <= interger; i++) {
      product *= i;
    }
    console.log(
      "The product of the integers between 1 " +
        "and " +
        interger +
        " is " +
        product
    );
  }
}

program();
