// arrow functions = a concise way to write functions that you use only once.
// (parameters) => some code
//example
setTimeout(() => console.log("Hello"),3000);

const numbers = [1,2,3,4,5,6];
const squares = numbers.map((element)=>Math.pow(element,2));
const cubes = numbers.map((element)=>Math.pow(element,3));
const evenNum = numbers.filter((element) => element % 2 === 0);
const total = numbers.reduce((accumulator,element) =>  accumulator + element );
console.log(cubes);
console.log(squares);
console.log(evenNum);
console.log(total);


