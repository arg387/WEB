//


const fruits = [{name:"apple",color:"red",calories:95},                       {name:"oranges",color:"orange",calories:45},{name:"banana",color:"yellow",calories:105},{name:"coconut",color:"brown",calories:159},{name:"pineapple",color:"yellow",calories:37}];

// Thats how someone can access the properties inside the array of objects.

console.log(fruits[3].color);

// use push() method to add a new object in the array of objects.
/* 
fruits.push({name:"grapes",color:"purple",calories:62}); */
/* console.log(fruits[5]);
console.log(fruits[5].color); */

// pop() method remove the last object of the array.
/* fruits.pop();
console.log(fruits); */

// splice() method can remove elements from certain indices.
/* 
fruits.splice(1, 2);
console.log(fruits); */

// ------------------forEach()--------------------
// you can use it to loop through your certain elements

fruits.forEach((fruit) => console.log(fruit));
fruits.forEach((fruit) => console.log(fruit.color));
// ---------------- map() method ----------------
// 31 th line means for every fruit return the fruits name. it will store fruit names in a new array.
const fruitName = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitName);
console.log(fruitColors);

// ----------- filter() method-------------------

const lowCalories = fruits.filter(fruit => fruit.calories < 100)
const highCalories = fruits.filter(fruit => fruit.calories > 100)
console.log(lowCalories);
console.log(highCalories);

// ---------------reduce() method ----------------
// here if first condition is true then fruit will take the max position or else max position will remain unchanged.
const maxFruit = fruits.reduce((max,fruit) =>fruit.calories > max.calories ? fruit :  max);
console.log(maxFruit);
// if only calories needed

console.log(maxFruit.calories);
const minFruit = fruits.reduce((min,fruit) => fruit.calories < min.calories ? fruit : min)
console.log(minFruit);
console.log(minFruit.calories);

// When using the reduce method to find the maximum or minimum value in an array, we don't need to assume a max or min value because the reduce method takes care of initializing the accumulator value for us. 
// (min,fruit) => fruit.calories < min.calories ? fruit : min)               ---------- this is the callback function here 