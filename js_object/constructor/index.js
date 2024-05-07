// constructor = special method for defining the properties and method of object.

function Car (make,model,year,color){
  this.make = make,
  this.model = model,
  this.year = year, 
  this.color = color,
  this.vehicle = ()=>{console.log(`I am driving a ${color} ${make} ${model}`)}
}

const Car1 = new Car ("Ford","Mustang",2024,"red");
const Car2 = new Car ("Jk","Jaguar",2026,"red");
const Car3 = new Car ("Tata","Titan",2023,"Blue");
console.log(Car1.make);
console.log(Car1.model);
console.log(Car1.color);
console.log(Car1.year);
console.log(Car2);
console.log(Car3);
Car1.vehicle();
Car2.vehicle();
Car3.vehicle();
