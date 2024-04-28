// function declaration = define a reusable block of code.
// example
/* function hello(){
  console.log("hello world")
}
setTimeout(hello,3000); */


// function expression = a way to define functions as values or variables.
//example
// here we are passing an entire function as argument
setTimeout(function() {
  console.log("hello world! 2024...");
}, 13000);

//////////////////////////////////
//function declaration

/* const numbers = [1,2,3,4,5,6,7,8,9,10];
const squares = numbers.map(square);
console.log (squares);
function square (element){
  return Math.pow(element,2);
} */

// function expression 

const numbers = [1,2,3,4,5,6,7,8,9,10];
const squares = numbers.map(function(element){
  return Math.pow(element,2);
});
const cubes = numbers.map(function(element){
  return Math.pow(element,3);
});
const evenNum = cubes.filter(function(element){return element % 2 === 0});
const oddNum = cubes.filter(function(element){return element % 2 !== 0});
const total = cubes.reduce(function(accumulator,element){
  return accumulator + element;
});
console.log(squares);
console.log(cubes);
console.log(evenNum);
console.log(oddNum);
console.log(total);
