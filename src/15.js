let myArray = ["apple", "banana", "orange"];

function getRandomElement(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

console.log(getRandomElement(myArray));
