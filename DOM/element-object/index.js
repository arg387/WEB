// element selectors = Methods used to target and manipulate HTML elements. They allow you to select one or multiple HTML elements from the DOM (Document Object Model) 

// for css properties in js if you accessing it through the DOM they will follow camel case naming convention. not like css where hyphenated naming convention is used .

// 1.document.getElementById() // ELEMENT OR NULL 
/* 
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading); */
////////////////////////////////////////////////////////////

// 2.document.getElementsByClassName() // HTML COLLECTION 

/* const fruits = document.getElementsByClassName("food");
console.log(fruits); */
/* for(let fruit of fruits){
  fruit.style.backgroundColor = "yellow";
} */
/* fruits[1].style.backgroundColor = "yellow"; */
// if you want to use array method for this html collection you would need to typecast it into an array.
/* Array.from(fruits).forEach(fruit =>{
  fruit.style.backgroundColor = "yellow";
}); */
//The Array.from() method is particularly useful when you're working with an array-like object that doesn't have all the features of a native JavaScript array. Examples include NodeList, which might be returned by methods like document.querySelectorAll.
//This part converts the fruits variable into a proper JavaScript array.[Array.from()part]
//This code iterates through each element in the fruits array (assuming it's an array-like object or a proper array containing references to HTML elements).

////////////////////////////////////////////////////////////

// 3.document.getElementsByTagName() // HTML COLLECTION 

/* const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li"); */
// these are html collections not arrays. 
/* h4Elements[0].style.backgroundColor = "yellow";
h4Elements[1].style.backgroundColor = "cyan";

for(let liElement of liElements){
  liElement.style.backgroundColor = "hsl(45,89%,56%)";
} */

// convert html collections to array------ process
/*  Array.from(h4Elements).forEach(h4Element =>{h4Element.style.backgroundColor = "cyan";});
 Array.from(liElements).forEach(liElement =>{liElement.style.backgroundColor = "hsl(45,89%,56%)";}); */
 // Array is a built in object in js with from method. forEach is not a loop but a method.

 /////////////////////////////////////////

// 4.document.querySelector() // ELEMENT OR NULL 
// it will return the first matching element.
// to select an element by className we will use .class as argument.
/* const element = document.querySelector(".food"); */
/* const element = document.querySelector("h4");
element.style.backgroundColor ="yellow"; */

////////////////////////////////////////////////////////

// 5. document. querySelectorAll() // NODE LIST (node list are static.)

const foods = document.querySelectorAll("li");

/* foods[4].style.backgroundColor = "yellow"; */
/* console.log(foods); */

foods.forEach(food =>{
  food.style.backgroundColor = "yellow";
});