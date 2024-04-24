// ⁡⁣⁣⁢spread operator = ... allows an iterable such as an array or string to be expanded into separate elements(unpack the elements).⁡ 
// ⁡⁣⁢⁢using numbers ⁡
/* 
let numbers = [ 1 , 2 , 3 , 4 , 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum); */

// ⁡⁣⁢⁢using strings⁡

/* let username = "John Douglas  ";
let letters = [...username] */
/* let letters = [...username].join("-"); */

/* console.log(letters); */
// ⁡⁣⁢⁣remember space is also a character here so they will be printed as elements.⁡

let fruits = ["apple","orange", "mango"];
//////////////////////
// shallow copy = A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.
/* 
let newFruits = [...fruits];

fruits.push("banana");
console.log(fruits);
console.log(newFruits); */
//////////////////////
let vegetables = ["tomato", "potato", "onion"];
// add two arrays together and append a new element to the end of the array.
let allGroceries = [...fruits, ...vegetables, "ginger"];
console.log(allGroceries);

