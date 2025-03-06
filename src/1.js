function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
