// Async/Await = Async = makes a function return a promise
//              Await = makes an async function wait for the promise.
//Allows you to write asynchronous code in a synchronous manner. Async doesn't have resolve or reject parameters 
// Everything after Await  is  placed in an event queue

function walkDog() {
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      const dogWalked = true;
      if(dogWalked){
        resolve("I have walked the dog 🐕‍🦺🐩");
      }
      else{
        reject("I have not done a walk with my dog.");
      }
    },500);
  })
}
function cleanKitchen(){
  return new Promise ((resolve,reject) => {
    setTimeout(()=>{
      const cleanedKitchen = true;
      if(cleanedKitchen){
        resolve("I have cleaned the kitchen 🔪");
      }
      else{
        reject("I have not cleaned the kitchen.");
      }
      
    },1500);
  })
}
function removeTrash() {
  return new Promise ((resolve,reject) => {
    setTimeout(()=>{
      const trashRemoved = false;
      if(trashRemoved){
        resolve("I have removed the trash 🚮");
      }
      else{
        reject("I have not removed the trash.");
      }
    },3500);
  })
}
async function doHouseWork(){
  try{
    const walkDogResult = await walkDog(); 
  console.log(walkDogResult);
  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);
  const removeTrashResult = await removeTrash();
  console.log(removeTrashResult); 
  console.log("I have done all the house work!")
  }
  catch{
    console.log("I have not done all the house work!!")
  }
  
}
doHouseWork();