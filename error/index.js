// Error = An object that is created to represent a problem that occurs often with user input or establishing a connection.

// try{} = encloses code that might potentially cause an error
// catch{} = catch and handle any thrown errors from try{}
// finally{} = code that will always run, regardless of whether an error is thrown or not.
// mostly used for clean up  ex. close files , close connections , release resources.
// -----------example----------------
try{
  console.log(x);
  // network errors 
  // promise rejection 
  // security errors
}
catch(err){
  console.log(err);
}
finally{
  console.log("This will always run");
  // close files 
  // close connections
  // release resources
}
console.log("You have reached the end.");

// -----------example----------------
try{
  const dividend = window.prompt("Enter a dividend:");
  const divisor = window.prompt("Enter a divisor:");
  if(divisor == 0){
    throw new Error("You can't divide it by zero. ");
  }
  if(isNaN(dividend) || isNaN(divisor)){
    throw new Error("You can't input string.");
  }
  const result = dividend / divisor;
  console.log(result);

}
catch(error){
  console.error(error);
}

console.log("You have reached the end.");