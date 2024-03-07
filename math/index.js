// ⁡⁢⁣⁢Math = build in objects that provides a collection of properties and methods.⁡

/* let x = 1.555;
let y = 5;
let z = 8; */
/* z= Math.round(x); */
// this will return values like if x= 1.54 then x= 2
/* z= Math.floor(x); */
// ⁡⁣⁣⁢somehow same work is done by both round and floor⁡⁡
/* z= Math.ceil(x);  */
// ⁡⁣⁣⁢opposite work is done by ceil⁡
/* z= Math.trunc(x);  */
// ⁡⁣⁣⁡⁣⁣⁢return only integral part by removing any fractional parts.⁡
/* z= Math.pow(x,y);  */
// ⁡⁣⁣⁡⁣⁣⁢return the power of the given number.⁡

/* z= Math.sqrt(x,y); */

// ⁡⁣⁣⁡⁣⁣⁢return the square root of the given number.⁡
/* z= Math.log(x); */

// ⁡⁣⁣⁢���������������return the natural logarithm of the given number.��⁡

/* z= Math.sin(x); */
/* z= Math.cos(x); */
/* z= Math.tan(x); */

/* z= Math.abs(x); */

// ⁡⁣⁣⁡⁣⁣⁢���������������return the absolute of the given number.��⁡
/* z= Math.sign(x); */

/* console.log(z); */
// ⁡⁣⁣⁢������������������������������return the sign of the given number.����⁡
// ⁡⁣⁣⁢note: among the two js command last one will work.⁡
/* let max = Math.max(x,y,z);
let min = Math.min(x,y,z); */

/* console.log(min,max); */


//⁡⁢⁣⁢Random number generator⁡

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;

let randomNum1 =0;
let randomNum2 =0;
let randomNum3 =0;


myButton.onclick = function(){
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
}

// For Math.random() method -- Expected output: a number from 0 to <1