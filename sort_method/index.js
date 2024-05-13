// sort() = method used to sort elements of an array in place. Sort elements as strings in lexicographic order, not alphabetical.
// lexicographic = (alphabet + numbers + symbols) as strings. 

let numbers = [1,10,2,5,9,7,3,6,4,8,80,78];
numbers.sort((a,b) => a-b );
console.log(numbers); 

// Here, the callback function simply subtracts b from a (means a-b )and returns the result. If the result is negative, it means that a comes before b in the sorted array. If the result is positive, it means that a comes after b in the sorted array. If the result is 0, it means that a and b are equal and can be sorted in any order.

// for opposite order  
let numbers1 = [1,10,2,5,9,7,3,6,40,80,80,781];
numbers1.sort((a,b) => b-a)
console.log(numbers1);
let fruits = ["Banana","Apple","Grapes","Pineapple","Orange"];
fruits.sort();
console.log(fruits); 

//////////////////////////////////////////////////

const people = [{name:"Samuel",age:30,gpa:3.7},                                         {name:"Ram",age:32,gpa:3.0},             {name:"Becky",age:33,gpa:3.2},            {name:"Roth",age:36,gpa:3.9}];
/* people.sort((a,b)=> b.gpa-a.gpa), */

people.sort((a,b)=> a.name.localeCompare(b.name)),
console.log(people);