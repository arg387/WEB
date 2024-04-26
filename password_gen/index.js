// random password generator
function generatePassword(passwordLength,includeLowercase , includeUppercase, includeNumbers ,includeSymbols){
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=";
  let validChars = "";
  let password = "";
  validChars += includeLowercase ? lowercase : "";
  validChars += includeUppercase ? uppercase : "";
  validChars += includeNumbers ? numbers : "";
  validChars += includeSymbols ? symbols : "";
  if(passwordLength <= 0){
    return `password length must be at least 1`;
  }
  if( validChars.length === 0){
    return `at least 1  set of character must be selected`;
  }
  for(let i = 0; i < passwordLength; i++){
    password += validChars.charAt(Math.floor(Math.random() * validChars.length));
  }
  return password;
}
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,                                  includeLowercase,                                 includeUppercase,                                 includeNumbers,                                   includeSymbols);

console.log(`Generated password : ${password}`);

