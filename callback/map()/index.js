// .map() = accepts a callback and applies that function to each element of an array , then return a new array. 

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);
 console.log(squares); 
console.log(cubes);
function square(element){
  return Math.pow(element, 2);
}
function cube(element){
  return Math.pow(element, 3);
}

const students = ["Spongebob","Patrick","Squidward","Sandy"];
const studentsUpperCase = students.map(upperCase);
console.log(studentsUpperCase);
function upperCase(element){
  return element.toUpperCase();
}
const studentsLowerCase = students.map(lowerCase);
console.log(studentsLowerCase);
function lowerCase (element){
  return element.toLowerCase();
}

const dates = ["2024-1-10","2025-3-20","2026-3-21"];
const formatDates = dates.map(formatDate);
console.log(formatDates);

function formatDate(element){
  const parts = element.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  return`${day}/${month}/${year}`;

}