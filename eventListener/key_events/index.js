// eventListener = Listen for specific events to create interactive web pages 
// events: keydown, keyup
// document.addEventListener(event, callback);

const myBox = document.getElementById("myBox");
/* document.addEventListener("keydown", event => {
  myBox.textContent = "😯";
  myBox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", event => {
  myBox.textContent = "😊";
  myBox.style.backgroundColor = "lightblue";
}); */

const moveAmount = 100;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{

  if(event.key.startsWith("Arrow"))
    // if(event.key.startsWith("Arrow")): This line checks if the pressed key starts with "Arrow". This efficiently identifies all arrow keys (Up, Down, Left, Right) without needing to check for each one individually.{
    // event.preventDefault(); : This line prevents the browser's default behavior for the arrow keys, such as scrolling the page. This ensures the arrow keys only control the box movement.
    event.preventDefault();
    switch(event.key){
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top =`${y}px`;
    myBox.style.left =`${x}px`;

  }

)

//In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

//In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

//With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:

// addEventListener(event, function, useCapture);

//The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.