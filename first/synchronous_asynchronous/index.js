// synchronous = Executes line by line consecutively in a sequential manner. 
// Code that waits for an operation to complete. 
//asynchronous = allows multiple operations to be performed concurrently Without waiting .Doesn't block the execution flow and allows the program to continue . ( I/O operations, network requests,fetching data ) Handled with: Callbacks, Promises, Async/Await.
// asynchronous example -------------------------
function func1(Callback){
  setTimeout(() => {console.log("task1");Callback()
  }, 3000);
}

function func2(){
  console.log("Task 1"); 
  console. log("Task 2");
  console. log("Task 3");
}
// func2 is used as callback here
func1(func2);