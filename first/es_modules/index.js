import {PI,getArea,getCircumference,getVolume} from './esscript.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`)
console.log(`${area.toFixed(2)}cm^2`)
console.log(`${volume.toFixed(2)}cm^3`)
// Module = An external file that contains reusable code that can be imported into other JavaScript files .
//Can contain variables, classes, functions . ...
//and more Introduced as part of ECMLScript 2015 update 