// ⁡⁣⁣⁢array = a variable like structure that can hold multiple values⁡
let fruits = ["apple", "orange","pineapple"];
fruits[0] = "pear";

// ⁡⁣⁢⁣The push() method is used to add one or more elements to the end of an array⁡
/* fruits.push("mango"); */
// ⁡⁣⁣⁡⁣⁢⁣The pop() method is used to remove the last element from an array⁡
/* fruits.pop(); */
// ⁡⁣⁢⁣The unshift() method is used to add one or more elements to the beginning of an array.⁡
/* fruits.unshift("berry"); */
// ⁡⁣⁣⁡⁣⁢⁣The shift() method is used to remove the first element from an array.⁡
/* fruits.shift(); */


/* console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); */

////////////////////////////////////////////

/* let numOfFruits = fruits.length;
let index = fruits.indexOf("pear");
console.log(numOfFruits);
console.log(index); */
//////////////////////////////////////
// ⁡⁣⁢⁣printing all the elements of an array using for loop.⁡
/* 
for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
  
} */
fruits.sort().reverse();
// ⁡⁣⁢⁣for sorting and reversing the array these two methods are used.⁡

/* for (let fruit of fruits){
  console.log(fruit);
} */

//////////////////////////////////
// ⁡⁣⁣⁢To print all the array elements in a webpage, you can use the following code:⁡
let paragraph = document.createElement("p");
// ⁡⁣⁢⁣creates a new paragraph element .⁡ ⁡⁣⁢⁣here p is the tag name of html.⁡

paragraph.textContent = fruits.join(", ");

// ⁡⁣⁢⁣sets the text content of the paragraph element to the elements of the fruits array, separated by commas. The join() method is used to convert the array into a string, with each element separated by a specified string (in this case, a comma followed by a space).⁡

document.body.appendChild(paragraph);
// ⁡⁣⁢⁣appends the paragraph element to the body of the webpage.⁡



