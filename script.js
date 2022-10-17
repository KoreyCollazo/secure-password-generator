

let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

toUpper = function(x){ 
  return x.toUpperCase();
};

let uppercaseLetters = lowercaseLetters.map(toUpper);
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


var lowercasePrompt
var uppercasePrompt
var numbersPrompt
var specialPrompt
var passwordLegnth
var userInput = []

//generate password
function generatePassword() {
  
  let lowercasePrompt = confirm("would you like to include lowercase characters?");
  let uppercasePrompt = confirm("would you like to include uppercase characters?");
  let numbersPrompt = confirm("would you like to include numerical characters?");
  let specialPrompt = confirm("would you like to include special characters?");
  let passwordLegnth = parseInt(prompt("Please enter password length (atleast between 8 - 128 characters)"));
  var password = [];
  
if (!passwordLegnth) {
  alert("you must select a password length");
} else if (passwordLegnth < 8 || passwordLegnth > 128) {
  passwordLegnth = parseInt(prompt("Please enter password length (atleast between 8 - 128 characters)"))
}
// All false
if (!lowercasePrompt && !uppercasePrompt && !numbersPrompt && !specialPrompt) {
     alert("Please select atleast one character type!");
// All true
} else if (lowercasePrompt && uppercasePrompt && numbersPrompt && specialPrompt) {
  userInput = lowercaseLetters.concat(uppercaseLetters, numbers, specialCharacters)
} 
//3 true
else if  (lowercasePrompt && uppercasePrompt && numbersPrompt){
  userInput = lowercaseLetters.concat(uppercaseLetters, numbers)
} else if  (lowercasePrompt && uppercasePrompt && specialPrompt){
  userInput = lowercaseLetters.concat(uppercaseLetters, specialCharacters)
}else if  (lowercasePrompt && specialPrompt && numbersPrompt){
  userInput = lowercaseLetters.concat(specialCharacters, numbers)
}else if  (specialPrompt && uppercasePrompt && numbersPrompt){
  userInput = specialCharacters.concat(uppercaseLetters, numbers)
}
//2 true
else if  (lowercasePrompt && uppercasePrompt){
  userInput = lowercaseLetters.concat(uppercaseLetters)
} else if  (lowercasePrompt && numbersPrompt){
  userInput = lowercaseLetters.concat(numbersPrompt)
} else if  (lowercasePrompt && specialPrompt){
  userInput = lowercaseLetters.concat(specialCharacters)
} else if  (uppercasePrompt && numbersPrompt){
  userInput = uppercaseLetters.concat(numbersPrompt)
} else if  (uppercasePrompt && specialPrompt){
  userInput = uppercaseLetters.concat(specialPrompt)
} else if  (numbersPrompt && specialPrompt){
  userInput = numbers.concat(specialCharacters)
}
//1 true
else if  (lowercasePrompt){
  userInput = lowercaseLetters
} else if  (uppercasePrompt){
  userInput = uppercaseLetters
} else if  (numbersPrompt){
  userInput = numbers
} else if  (specialPrompt){
  userInput = specialCharacters
}
for (var i = 0; i < passwordLegnth; i++) {
  var filteredInput = userInput[Math.floor(Math.random() * userInput.length)];
  password.push(filteredInput);
  console.log (filteredInput)
}}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", generatePassword, writePassword);




