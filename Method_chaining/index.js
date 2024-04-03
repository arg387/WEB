// ⁡⁢⁣⁡⁣⁣⁢Method chaining = calling one method after another in one continuous line of code.⁡⁡

let userName = window.prompt("Enter your name:" ,"please enter your name");

//⁡⁢⁣⁢---- No method chaining----------------⁡


/* userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();
userName = letter + extraChars;

console.log(userName); */

//⁡⁢⁣⁢---- Method chaining------------------⁡

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(userName);