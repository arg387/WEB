// destructuring = extract values from arrays and objects, and then assign them to variables in a convenient way.
// [] = to perform array destructuring.
// {} = to perform object destructuring.

// -------------- example 1 -------------
// swap the value of two variables.

let a = 1 ;
let b = 2 ;

[a, b] = [b , a];

console.log(a);
console.log(b);

// ------------- example 2 --------------
// swap the elements in an array.

let arr = [1, 2, 3, 4, 5] ;

[arr[0],arr[1],arr[2],arr[3],arr[4]] = [arr[1],arr[0],arr[2],arr[4],arr[3]];
console.log(arr); 

// ---------------- example 3 ------------------
// assign values to the variables 

let colors = ["red", "green", "yellow","orange","dark red","purple"];

// use of rest parameter example 

let [color1, color2, color3, ...extraColors] = colors;
console.log(color1);
console.log(color2);
console.log(color3);
console.log(extraColors);

// ---------------- example 4 --------------------
// Extract value from objects

const person3 = {
  Name: "Spongebob",
  lastName: "squarepants",
  age: 20,
  job: "Plumber",

}
const person4 = {
  Name: "Patrick",
  lastName: "squarepant",
  age: 23,


}
const {Name,lastName,age,job= "Unemployed"} = person4;
console.log(Name);
console.log(lastName);
console.log(age);
console.log(job);

///////////////////////////

// ---------------- example 5 --------------------
// Destructure in function parameters

// to remove undefined we used default value here if job property is given then default value will not be used.
function displayPerson({Name,lastName,age,job= "Unemployed"}){
  console.log(`name: ${Name} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);}
const person1 = {
  Name: "Spongebob",
  lastName: "squarepants",
  age: 29,
  job: "Plumber",

}
const person2 = {
  Name: "Patrick",
  lastName: "squarepant",
  age: 23,


}
displayPerson(person1);