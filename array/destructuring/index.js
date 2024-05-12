// destructuring = extract values from arrays and objects, and then assign them to variables in a convenient way.
// [] = to perform array destructuring.
// {} = to perform object destructuring.

// -------------- example 1 -------------
// swap the value of two variables

let a = 1 ;
let b = 2 ;

[a, b] = [b , a];
console.log(a);
console.log(b);