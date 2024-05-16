// NodeLi = Static collection of Html elements by(id, class , element) 
//can be created by using querySelectorAll()
// Similar to an array, but no(map,filter,reduce)
// NodeList won't update to automatically reflect changes 
let buttons = document.querySelectorAll(".myButtons")

// Add Html /CSS properties
/* buttons.forEach(button =>{ 
  button.style.backgroundColor = "red";
  button.textContent += "😁";

}); */

/////////////////////////////////////

// Click event listener.

/* buttons.forEach(button =>{
  button.addEventListener("click", event =>{
    event.target.style.backgroundColor = "orange";
  })
}); */

// mouseover and mouseout event listener
/* buttons.forEach(button => {
  button.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "violet";
  }) 
});

buttons.forEach(button => {
  button.addEventListener("mouseout",event =>{
    event.target.style.backgroundColor = "hsl(154, 76%, 44%)";
  })
}) */

// Add an element

/* const newButton = document.createElement("button");// step 1
newButton.textContent ="Button5";// step 2
newButton.classList = "myButtons";

document.body.appendChild(newButton);// step 3 */
// to update element list
/* buttons = document.querySelectorAll(".myButtons");
console.log(buttons); */

// remove an element from nodeList

buttons.forEach(button => {
  button.addEventListener("click",event => {
    event.target.remove();
    buttons = document.querySelectorAll(".myButtons");
    console.log(buttons);
  })
})
