// eventListener = Listen for specific events to create interactive web pages events : click ,mouseover, mouseout, .addEventListener(event, callback or arrow function or an anonymous function);
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// here target means the element where we are clicking check the target using console.log event if there is any confusion.
myButton.addEventListener("click",event =>{
    /* console.log(event); */
/*     event.target.style.backgroundColor = "purple";
    event.target.textContent = "OUCH!!🤕"; */
    myBox.style.backgroundColor = "purple";
    myBox.textContent = "OUCH!!🤕";
});
myButton.addEventListener("mouseover", event => {
/*   event.target.style.backgroundColor = "tomato";
  event.target.innerHTML = "Don't do it 😯."; */
  myBox.style.backgroundColor = "tomato";
  myBox.innerHTML = "Don't do it 😯.";
})
myButton.addEventListener("mouseout", event => {
/*   event.target.style.backgroundColor = "tomato";
  event.target.innerHTML = "That's great👌."; */
  myBox.style.backgroundColor = "tomato";
  myBox.innerHTML = "That's great👌.";
})