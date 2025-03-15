// Random JavaScript Code Generator
function getRandomCode() {
  const codes = {
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    specialCharacters: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "{", "[", "}", "]", "|", "\\", "/", "<", ">", ",", ".", ";", ":", "?"],
  }
  
  const randomCode = [];
  
  // Add numbers to the code
  for (let i = 0; i < 4; i++) {
    const numberIndex = Math.floor(Math.random() * codes.numbers.length);
    randomCode.push(codes.numbers[numberIndex]);
  }
  
  // Add letters to the code
  for (let i = 0; i < 4; i++) {
    const letterIndex = Math.floor(Math.random() * codes.letters.length);
    randomCode.push(codes.letters[letterIndex]);
  }
  
  // Add special characters to the code
  for (let i = 0; i < 2; i++) {
    const specialCharacterIndex = Math.floor(Math.random() * codes.specialCharacters.length);
    randomCode.push(codes.specialCharacters[specialCharacterIndex]);
  }
  
  return randomCode.join("");
}

console.log(getRandomCode());
