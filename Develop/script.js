var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
var numeric = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*()";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var possiblecharacters = ""


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log 
  passwordText.value = password;
}

function generatePassword() {
  var passwordlenght = prompt("How long would you like the password to be. (it has to be between 8 and 128 characters)")
  if(passwordlenght <8 || passwordlenght >128) {
    alert("password has to be between 8 and 128 characters");
    return; 
  }
  
  var Passwordlowercase = window.confirm("Do you want to include lowercase Characters?"); 
  var PasswordUppercase = window.confirm("Do you want to include uppercase Characters?"); 
  var PasswordNumericase = window.confirm("Do you want to include numeric Characters?"); 
  var PasswordSpecial = window.confirm("Do you want to include Special Characters?"); 

if(Passwordlowercase) {
possiblecharacters += lowercase
}
if(PasswordUppercase) {
  possiblecharacters += uppercase
  }
if(PasswordNumericase) {
  possiblecharacters += numeric
  }
if(PasswordSpecial) {
  possiblecharacters += special
  }
console.log (possiblecharacters)

if(!PasswordNumericase && !PasswordSpecial && !PasswordUppercase && !Passwordlowercase) {
  alert("YOU MUST SELECT AT LEAST ONE CHARACTER");
  return;
}

var passwordcharacters = ""

for (var i=0; i<passwordlenght; i++) {
passwordcharacters += possiblecharacters.charAt(Math.floor(Math.random ()*possiblecharacters.length))
}

console.log (passwordcharacters)
return passwordcharacters
}



