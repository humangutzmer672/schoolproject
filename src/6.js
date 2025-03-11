// A simple JavaScript function that returns a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Call the function to get a random number
let randomNumber = getRandomNumber();
console.log("The random number is: " + randomNumber);
