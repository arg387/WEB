// ⁡⁣⁣⁢forEach() = method used to iterate over the elements of an array and apply a specific function(callback) to each element of the array. it does not return nor create a new array.⁡

//      array.forEach(callback) 
// it accepts arguments upto 3.
/* let numbers = [1,2,3,4,5];
numbers.forEach(cube); */
/* numbers.forEach(square); */
/* numbers.forEach(triple); */
/* numbers.forEach(double); */
// if you want to callback any function you should mention the callback of that function first.
/* numbers.forEach(display); */



/* function double(element,index,array){
  array[index] = element * 2;
} */
/* function display (element){
  console.log(element)
} */
/* function triple (element, index,array){
  array[index] = element * 3;
} */
/* function square (element, index,array){
  array[index] = Math.pow(element,2);
} */
/* function cube (element, index,array){
  array[index] = Math.pow(element,3);
} */

/////////////////////////////////////////

let fruits = ["apple","orange","banana","coconut"];
/* fruits.forEach(displayUppercase); */
fruits.forEach(capitalize);
fruits.forEach(display);
function display (element){
  console.log(element);
}

function displayUppercase (element,index,array){
  array[index] = element.toUpperCase();
}
function capitalize (element,index,array){
  array[index] = element.charAt(0).toUpperCase()+ element.slice(1);
}