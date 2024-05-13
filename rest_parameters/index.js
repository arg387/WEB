// ⁡⁣⁣⁢rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array.⁡
// ⁡⁣⁣⁢rest parameters must be the last parameter in the list of parameters.⁡

/* function openFridge(...foods){
  console.log(foods);
}

const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "fried rice";
const food5 = "rice ball";

openFridge("pizza", food2, food3, food4, food5); */

// look closely since this works 
///////////////////////////////
// look closely since both this works 
let total = 0;
function sum (...numbers){
  let total = 0;
  for (let number of numbers ){
    total += number;
  }
  return total;
}
function avg (...numbers){
  let total = 0;
let count = numbers.length;  
  for (let number of numbers ){
    total += number;
  }
  return total/count;
}
console.log(sum(1,2,5));
console.log(avg(1,2,5));
// you cannot declare it here ``` let total = 0;``` because if you do that you are declaring the variable after function call. 

///////////

function sum (...numbers){

  for (let number of numbers ){
    total += number;
  }
  return total;
}
function avg (...numbers){

let count = numbers.length;  
  for (let number of numbers ){
    total += number;
  }
  return total/count;
}
console.log(sum(10,20,50));
console.log(avg(10,20,50));

////////////////////////////////
// ⁡⁣⁢⁢combine strings⁡

/* function combineStrings(...string){
  return string.join(" ");

}

const result = combineStrings("Mr","John", "Beckman");
console.log(result); */