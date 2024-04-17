// ⁡⁣⁣⁢variable scope = where a variable is recognized and accessible.⁡

let z = 1;
// ⁡⁣⁣⁢⁡⁢⁢⁡⁣⁢⁣Global scope = variables declared outside of a function.⁡

// ⁡⁢⁢⁡⁣⁢⁣Local scope = variables declared inside a function.⁡
function1();
function function1 (){
     let x = 1;
     // declared inside a function, so it is local to the function
     console. log(x);
 }
 function2();
function function2(){
     let y = 2;
     console. log(y);
}
///////////////////////////////////////////
// ⁡⁢⁣⁡⁣⁢⁣local scope will override global scope in case of the same variable name like 'x'.⁡ ⁡⁣⁢⁣In this case if  we remove local variables, we can use global variable.⁡
let x = 1;
function1();
function function1(){
     let x = 2;
     console. log(x);
}
function2();
function function2(){
     let x = 3;
     console. log(x);
}

