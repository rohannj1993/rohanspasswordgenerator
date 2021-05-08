// Assignment code here
console.log("first")

var lowercasecharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"]
var uppercasecharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialchar =['!','"','#',$%&'()*+,-./:;<=>?@[\]^_`{|}~]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var length = prompt("password needs to be between 8 to 128 characters")
  if (length < 8) {
    alert("password must be between 8 and 128 characters")
    generatePassword()
  } else if (length > 128) {
    alert("password must be between 8 and 128 characters")
    generatePassword()
  } else { 
    var asklowercase = confirm("do you want lower case letter in the password") 
    var askuppercase =confirm("do you want an upper case letter in the password")
    var asknumber = confirm("do you want numbers within password")
    var askspecialchar = confirm("do you want special characters within the password")
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
