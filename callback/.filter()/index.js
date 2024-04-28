// .filter() = creates a new array by filtering out elements.

///////////////////////////////////
// use of both filter and foreach method.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);
console.log(evenNumbers);
evenNumbers.forEach(display);
console.log(oddNumbers);
oddNumbers.forEach(display);

function isEven(element) {
  return element % 2 === 0;
}
function isOdd(element) {
  return element % 2 !== 0;
}

function display(element) {
  console.log(element);
}


// desired output:
//[2, 4, 6, 8, 10]
 //2
 //4
 //6
 //8
 //10
//[1, 3, 5, 7, 9]
 //1
 //3
 //5
 //7
 //9

 /////////////////////////////////////////

const ages = [14,16,17,18,19,20,30,40];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);
console.log(adults);
console.log(children);

function isAdult(element){
  return element >= 18;
}
function isChild(element){
  return element < 18;
}

const fruits = ["apple", "banana", "orange", "pineapple", "grapes"];
const fruitsWithSix = fruits.filter(isSix);
const fruitsWithS = fruits.filter(isS);
console.log(fruitsWithSix);
console.log(fruitsWithS);
function isSix(element){
  return element.length >= 6;
}
function isS(element){
  return element.length < 6;
}