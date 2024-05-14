//function in JavaScript that allows you to schedule the execution of a function after an amount of time (milliseconds) 
//Times are approximate (varies based on the workload of the 3 avaScript runtime env. ) 
// setTimeout(caIIback, delay); 
// example .............................
/* const myArray = ["zero", "one", "two"]

setTimeout((element) => {
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
}, 3000); */

/////////////////////////////////

// use clearTimeout function to cancel a setTimeout before execution
//clearTimeout(timeoutId)

/* const timeoutId = setTimeout(()=>console.log("hello world."),3000);
clearTimeout(timeoutId); */
////////////////////////////////////////
let timeoutID;
function startTimer() {
  timeoutID = setTimeout(()=>window.alert("hello"),3000);
  console.log("timer started");
}

function finishTimer(){

  clearTimeout(timeoutID);
  console.log("timer finished");
}

