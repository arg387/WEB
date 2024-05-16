// ClassList = Element property in js used to interact with an element's list of classes (CSS Classes)
// Allows you to make reusable classes for many elements across your webpage.

// add()
// remove()
// toggle() // (remove if present add if not )
// replace() // (oldClass , newClass)
// contains() 
/* const myH1 = document.getElementById("myH1")
const myButton = document.getElementById("myButton"); */
// add class example
/* myButton.classList.add("enabled"); */
// remove class example
/* myButton.classList.remove("enabled"); */

/* myButton.addEventListener("mouseover", event => {
  event.target.classList.add("hover");
});

myButton.addEventListener("mouseout", event => {
  event.target.classList.remove("hover");
}); */

// toggle() example

/* myButton.addEventListener("mouseover", event => {
  event.target.classList.toggle("hover");
});
myButton.addEventListener("mouseout", event => {
  event.target.classList.toggle("hover");
}); */

// replace() example
/* myH1.classList.add("enabled");
myButton.classList.add("enabled");
myButton.addEventListener("click",event =>
  {
    if(event.target.classList.contains("disabled")){
        event.target.textContent  += "🎶🎶";
    }
    else{
      event.target.classList.replace("enabled","disabled");
    }
    event.target.classList.replace("enabled","disabled");
  }
); */
// element.classList.replace(currentClass,newClass);
/////////////////////////////////////////
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
  button.classList.add("enabled");
})

buttons.forEach(button =>{
  button.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
  })
})
buttons.forEach(button =>{
  button.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
  })
})
buttons.forEach(button => {
  button.addEventListener("click",event => {  
     if(event.target.classList.contains("disabled")){
        event.target.textContent += "😯";
     }
     else{
      event.target.classList.replace("enabled","disabled");
     }
      
  })
})