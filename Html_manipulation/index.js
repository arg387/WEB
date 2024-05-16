// Add and change HTML
// ---------------- Example 1 <h> --------------------

// step 1 create  the element 

const newH1 = document.createElement("h1");
// step 2 add attributes / properties 

newH1.textContent = "I like to swim.";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
// step 3 append element to DOM

// if you want to add the html element to body(as last element)

/* document.body.append(newH1); */

// if you want to add the html element within div with id box1
/* document.getElementById("box2").append(newH1); */

// using prepend(for making first element)

/* document.getElementById("box2").prepend(newH1); */

// The new element newH1 is the last child since append is used. If prepend is used then newH1 will become the first child.

/* document.body.prepend(newH1); */

// to add an element between two elements

/* const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2); */

// if there is no id with html elements then to select those elements use classes
// remember to add "." before accessing classes.

/* const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1,boxes[2]); */

// step 4 remove html element

/* document.body.append(newH1);
document.body.removeChild(newH1); */
/* 
document.getElementById("box2").prepend(newH1);
document.getElementById("box2").removeChild(newH1); */

// ---------------- Example 3 <li> --------------------

// step 1 create  the element 

const newLi = document.createElement("li");

// step 2 add attributes / properties 

newLi.textContent = "Coconut";
newLi.id = "myLi";
newLi.style.fontWeight = "bold";
newLi.style.color = "purple";
newLi.style.backgroundColor = "LightGreen";

// step 3 append element to DOM

/* document.body.append(newLi); */
/* document.body.prepend(newLi); */



// STEP 3 APPEND ELEMENT TO DOM 
//document.body.append(newLi); 
//document.body.prepend(newLi); 
//document.getElementById("fruits").append(newLi); 
//document.getElementById("box4").prepend(newLink); 

/* const banana = document.getElementById("banana"); 
document.getElementById("fruits").insertBefore(newLi,banana); */

//document.body.insertBefore(newLink,box4);

/* const listItems = document.querySelectorAll("#fruits li"); 
document.getElementById("fruits").insertBefore(newLi,listItems[3]); */ 

//document.body.removeChi1d(newLink); 

// step 4 remove html element
document.getElementById("fruits").append(newListItems);
document.getElementById("fruits").removeChild(newListItems);