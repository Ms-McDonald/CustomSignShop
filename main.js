// Declare a variable for the finalCost
var finalCost;
// Declare variable for userInput
var userInput;
// Declare variable for costPerLetter
var costPerLetter = 50;

function calculate() {
  resetCost();
  getUserInput();
  removeSpaces();
  calculateCost();
  displayFinalCost();
}

//Create a function that resets the cost to zero
function resetCost() {
  finalCost = 0;
}

//Create a function that gets the user's input
function getUserInput() {
  userInput = document.getElementById("inputName1").value;
  console.log(userInput);
  console.log("user input length = " + userInput.length);
}

function removeSpaces() {
  userInput = userInput.split(" ").join("");
  console.log(userInput);
}

//Create a function that calculates the cost
function calculateCost() {
  finalCost = userInput.length * costPerLetter;
  console.log(finalCost);
}

//Create a function that displays the cost
function displayFinalCost() {
  document.getElementById("costOutput").innerHTML =
    "Your Custom Sign will cost: $" + finalCost;
}
