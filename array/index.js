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

/* for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
  
} */
fruits.sort().reverse();
for (let fruit of fruits){
  console. log(fruit);
}
