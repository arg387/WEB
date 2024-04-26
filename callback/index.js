// ⁡⁣⁣⁢callback = a function that is passed as an argument to another function⁡

// used to handle asynchronous operations:
// 1. reading a file.
// 2. making an HTTP request.
// 3. interacting with databases.


hello(wait);
hello(bye);

// ⁡⁣⁢⁣hello is a function that takes a callback as an argument.⁡

function hello(callback){
  console.log("hello");
  callback();
}
function wait(){
  console.log("wait");
  
}

function bye(){

  console.log("bye");
  
  // ⁡⁣⁢⁣take the callback parameter and invoke it.⁡
}
// by using callback we make sure that the function is called after the other function is executed.

sum(consoleRes,5,5); // Call sum function with consoleRes callback
sum(displayPage,5,7); // Call sum function with displayPage callback
function sum(callback, x , y){
  let result = x + y;
  callback(result);
}
function consoleRes(result){
  console.log(result);
}

function displayPage(result){
  document.getElementById("myH1").textContent = result;
}
