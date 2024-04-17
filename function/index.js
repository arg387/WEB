
// ⁡⁣⁣⁢function = a section of reusable code , declare that code once and use that whenever you want. call this function to execute the code in the function.⁡
// ⁡⁣⁢⁢the parameter needs to be in the same order as the code in the function. ⁡
/* function happyBirthday(username, age){
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log(`Happy birthday dear ${username}!`);
  console.log("Happy birthday to you!");
  console.log(`You are ${age} years old!`);
}
happyBirthday("argha", 23);
happyBirthday("som", 23);
happyBirthday("patrick", 23); */

///////////////////////////////////////////////

// ⁡⁣⁣⁢The return statement can only be used within function bodies. When a return statement is used in a function body, the execution of the function is stopped. The return statement ends function execution and specifies a value to be returned to the function caller.⁡

function add (x,y){
  let result = x + y;
  return result;

}
function subtract (x,y){
  let result = x - y;
  return result;

}
function multiply (x,y){
  let result = x * y;
  return result;

}
function divide (x,y){
  let result = x / y;
  return result;

}
function isEven(number){
  /* if (number % 2 === 0 ){
    return true;
  }
  return false; */
  return number % 2 === 0 ? true : false;

}

function isValidEmail(email){
/*   if (email.includes("@") ){
    return true;
  }
  return false;
} */
return email.includes("@") ? true : false;
}

console.log(add (1,2));
console.log(subtract(10,2));
console.log(multiply(10,2));
console.log(divide(10,2));
console.log(isEven(110));
console.log(isValidEmail("sahaargha345@gmail.com"));

