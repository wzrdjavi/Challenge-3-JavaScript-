/// Assignment code here
var charSelect = function() {

  // include lowercase characters
  var charLower = confirm('Include lowercase characters?');
  
  if (!charLower) {
    charLower = "";
  } else {
    charLower = "abcdefghijklmnopqrstuvwxyz";
  }

  // include uppercase characters
  var charUpper = confirm('Include uppercase characters?');

  if (!charUpper) {
    charUpper = "";
  } else {
    charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // include numeric characters
  var charNum = confirm('Include numbers?');

  if (!charNum) {
    charNum = "";
  } else {
    charNum = "0123456789";
  }

  // include special characters
  var charSpec = confirm('Include special characters?');

  if (!charSpec) {
    charSpec = "";
  } else {
    charSpec = "!@#$%&*+";
  }

  // concatenates the selected character types
  var charString = charLower + charUpper + charNum + charSpec
  
  // validates that at least one character type is selected
  if (charString.length > 0) {
    console.log("Character string is " + charString);
    return charString;
  } else {
    window.alert("Please choose at least one type of character.");
    return charSelect();
  }
}

var generatePassword = function() {
  
  // setting character length
  var charLength = prompt('Password Length? Please enter a number between "8" and "128".');
  charLength = parseInt(charLength);
  console.log('Character length is ' + charLength);
  
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    return generatePassword();
  }

  // generates password based on selected criteria
  var charSet = charSelect();
  var retPassword = "";
  
  for (var i = 0, n = charSet.length; i < charLength; i++) {
    retPassword += charSet[Math.floor(Math.random() * n)];
  }
  console.log("Generated password is " + retPassword);
  
  return retPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
