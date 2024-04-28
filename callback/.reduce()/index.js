// .reduce() = reduce the elements of an array to a single value.

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);
console.log(`$ ${total.toFixed(2)}`);
// accumulator = how much elements are added together
// element = current element
function sum (accumulator, element){
  return accumulator + element;
}

const grades = [87, 64, 96, 92, 88, 99, 73];
const maxGrade = grades.reduce(getMax);
const minGrade = grades.reduce(getMin);
console.log (maxGrade);
console.log(minGrade);
function getMax(accumulator,element){
  return Math.max(accumulator, element);
}
function getMin(accumulator,element){
  return Math.min(accumulator, element);
}


