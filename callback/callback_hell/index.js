// Callback Hell = Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read.Old pattern to handle asynchronous functions. Use Promises + async/await to avoid Callback Hell 



// asynchronous function example----------------------

// tasks will not complete in order here.
/* function task1(){ 
setTimeout(() =>{
  console.log("Task 1 complete")
},2000)
}
function task2(){setTimeout(() => { 
  console.log("Task 2 complete")
},3000);
}
function task3(){setTimeout(() => { 
  console.log("Task 3 complete")
},1500);
}
function task4(){setTimeout(() => { 
  console.log("Task 4 complete")
},3030);
}
task1();
task2();
task3();
task4();
console.log("All tasks complete.") */

/////////////////////////////////////////////

function task1(callback){ 
  setTimeout(() =>{
    console.log("Task 1 complete");
    callback();
  },2000)
  }
  function task2(callback){setTimeout(() => { 
    console.log("Task 2 complete");
    callback();
  },3000);
  }
  function task3(callback){setTimeout(() => { 
    console.log("Task 3 complete");
    callback();
  },1500);
  }
  function task4(callback){setTimeout(() => { 
    console.log("Task 4 complete");
    callback();
  },3030);
  }
  task1(() => {
    task2(() =>{
      task3(() => {
        task4(() => 
          console.log("All tasks complete."));
      })
    })
  })
  
