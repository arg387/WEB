// ⁡⁢⁢⁡⁣⁣⁢type conversion = change the datatype of a value to another.. ⁡


/* let age = window.prompt("How old are you?");
age = Number(age);
age+= 1;
console.log(age, typeof age); */

/* let x = window.prompt("");
let y = window.prompt("");
let z = window.prompt("");

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); */

/* let x ;
let y ;
let z ;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); */

//NaN =  Not a Number

// ⁡⁣⁢⁣constant = a number that cannot be changed⁡


// ⁡⁢⁢⁢we are using const before declaration of pi to make sure that the pi value cannot be changed later on.⁡
/* const PI = 3.14159;
let radius;
let circumference; 

 radius = window.prompt("Enter the radius of the circle:");
 radius = Number(radius);
 circumference = 2 * pi * radius;
 console.log(circumference); */

 // ⁡⁢⁣⁢Note: Capitalizing the constants usually done with  the primitive data type such as numbers in booleans  but not necessarily with the  reference data type such as strings.
 
const PI = 3.14159;
 let radius;
let circumference;
document.getElementById("My1BUT").onclick = function(){
  radius = document.getElementById("MyText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("H3Id").textContent = `The circumference of the circle with radius ${radius} is ${circumference}`; 
};