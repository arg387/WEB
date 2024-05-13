// closure = A function defined inside of another function.
// allow for private variables and state maintenance. This is the benefit of closure. 
// Used frequently in JS frameworks :React, Vue, Angular especially when you work with function based component.

function outer (){
  let message = "Hello";
  function inner(){
    console.log(message);
  }
  inner();
}
// Here everything in the outer function is the part of a closure.The inner function has access to the variables and scope of the outer function.

outer();

// a closure can maintain the state of a variable.
// here we used a function to return an object.
function createCounter (){
  let count = 0;
  function increment(){

    count++;
    console.log(`Count increased to ${count}`);
  }
  function getCount(){
    return count;
  }
  /* return {increment,getCount}; */
  return {increment:increment,getCount:getCount};
  // returning an object with an method increment
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

///////////////////////////

//----------------------example-------------------
function createGame(){
  let score = 0;
  function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);
  }
  function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
  }
  function getScore(){
    return score;
  }
  return {increaseScore,decreaseScore,getScore};
}

const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(game.getScore());