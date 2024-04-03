// ⁡⁣⁣⁢IF statements : if a condition is true then execute the statement or else not..⁡

/* let age; */
/* age = window.prompt("What is your age"); */

/* if (age >= 18) {
  window.alert("You are eligible to visit this site, please enter...");
} */
// ⁡⁣⁣⁢while is used to make a infinite loop. ⁡⁡
/* else {
  while(true) {
    window.alert("You are not eligible to visit this site, please leave...");
  }

} */
////////////////////////////////////////////////////////////////

/* const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;
mySubmit.onclick = function(){
  
  age = Number(myText.value);
  if (age >= 100) {
    resultElement.textContent ="You are too old to enter this site.";
  }
  else if (age == 0) {
    resultElement.textContent ="You are too young to enter this site.";
  }
  else if (age >= 18) {
    resultElement.textContent ="You can enter this site now.";
  }
  else if (age < 0) {
    resultElement.textContent ="You are not a human.";
  }
  else {
    resultElement.textContent ="You can only this site enter when your age crosses 18.";
  }
}
 */
////////////////////////////////////////////////////////////////
/* do{age = window.prompt("What is your age");}
while(age < 18 || age === undefined) {
  window.alert("You are eligible to visit this site..");
} */

////////  //////////////////////////////////////////////////////////////////////////

let loggedIn = false;
let username;
let password;

while(!loggedIn){
  username = window.prompt("Please enter your username");
  password = window.prompt("Please enter your password");
  if(username === "admin" && password === "<PASSWORD>"){
    loggedIn = true;
    window.alert("You are logged in.");
  }
  else{
    window.alert("Invalid username or password");
  }
}

////////////////////////////////////////////////////////////////


