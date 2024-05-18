// Promise = An Object that manages asynchronous operations. Wrap a Promise Object around {asynchronous code} 
// "I promise to return a value" 
// PENDING RESOLVED or REJECTED 
// new Promise ((resolve, reject) => {asynchronous code})
//DO THESE CHORES IN ORDER 
// 1. WALK THE DOG 
// 2. CLEAN THE KITCHEN 
// 3. TAKE OUT THE TRASH  


// callback hell example
/* function walkDog(callback){
  setTimeout(()=>{
    console.log("I have walked the dog 🐕‍🦺🐩");
    callback();
  },1500);
}
function cleanKitchen(callback){
  setTimeout(()=>{
    console.log("I have cleaned the kitchen 🔪");
    callback();
  },4500);
}
function removeTrash(callback){
  setTimeout(()=>{
    console.log("I have removed the trash 🚮");
    callback();
  },7500);
}
walkDog(()=>{
  cleanKitchen(()=>{
    removeTrash(()=>
      console.log("I have completed all my chores 🎉🎊🎉🎊🎉🎊�"));
  });
}); */

///////////////////////////////////

// how to solve callback hell
function walkDog(){

  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      const dogWalked = false;
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
function removeTrash(){

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
walkDog().then(value =>{console.log(value);return cleanKitchen()}).then(value => {console.log(value);return removeTrash()}).then(value => {console.log(value);console.log("You have finished all the chores.");}).catch(error =>console.log(error));
