// destructuring = extract values from arrays and objects, and then assign them to variables in a convenient way.
// [] = to perform array destructuring.
// {} = to perform object destructuring.

// -------------- example 1 -------------
// swap the value of two variables.

let a = 1 ;
let b = 2 ;

[a, b] = [b , a];

console.log(a);
console.log(b);

// ------------- example 2 --------------
// swap the elements in an array.

let arr = [1, 2, 3, 4, 5] ;

[arr[0],arr[1],arr[2],arr[3],arr[4]] = [arr[1],arr[0],arr[2],arr[4],arr[3]];
console.log(arr); 

// ---------------- example 3 ------------------
// assign values to the variables 

let colors = ["red", "green", "yellow","orange","dark red","purple"];

let [color1, color2, color3, ...extraColors] = colors;
console.log(color1);
console.log(color2);
console.log(color3);
console.log(extraColors);