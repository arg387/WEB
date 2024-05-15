// DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript. 


// .firstElementChild 
// .lastElementChiId 
// .nextElementSibling 
// .previousElementSibling 
// .parentElement 
// .children 

// ----------------  .firstElementChild --------------------

/* const element = document.getElementById("desserts");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow"; */
// method chaining
/* document.getElementById("desserts").firstElementChild.style.backgroundColor = "yellow"; */

/* const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement =>{
  ulElement.firstElementChild.style.backgroundColor = "skyblue";
}) */

//////////////////////////////////////////////////////
// ----------------  .lastElementChild --------------------

/* const element = document.getElementById("desserts");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow"; */

/* const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement =>{
  ulElement.lastElementChild.style.backgroundColor = "pink";
}) */

/////////////////////////////////////////////////////

// ---------------- .nextElementSibling --------------------

/* const element = document.getElementById("fruits");
const nextElement = element.nextElementSibling;
nextElement.style.backgroundColor = "yellow"; */

////////////////////////////////////////////////////////////

// ------------- .previousElementSibling ----------------

/* const element = document.getElementById("vegetables");
const prevElement = element.previousElementSibling;
prevElement.style.backgroundColor = "yellow"; */

////////////////////////////////////////////////////

// ---------------------- .parentElement -----------------

/* const element = document.getElementById("orange");
const parentElement = element.parentElement;
parentElement.style.backgroundColor = "yellow"; */

//////////////////////////////////////////////////
// ---------------------- .children  -----------------

const element = document.getElementById("vegetables");
const children = element.children;
children[0].style.backgroundColor = "yellow";
console.log(children);

// If you want to use array method for this html collection you would need to typecast it into an array.

/* Array.from(children).forEach(child => {
  child.style.backgroundColor = "yellow";
}) */