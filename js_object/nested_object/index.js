// nested objects = objects inside of other objects allows you to represent more complex data structures.
// child object is enclosed by a parent object
// Person{Address{},ContactInfo{}}
  // ShoppingCart{Keyboard{},Mouse{},Monitor{}}
  // nested objects are useful when you want to represent a hierarchy of data.

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 10,
  isStudent:true,
  hobbies:["Karate","Jellyfishing","Cooking"],
  address:{
    street:"123 Main Street",
    city:"San Jose",
    state:"CA",
    country:"International Ocean",
  }

}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);
console.log(person.address);
// accessing a property inside the nested object
console.log(person.address.country);
for(const property in person.address){
  console.log(person.address[property]);
}
// for...in loop is attempting to iterate over the properties of this.address, but this keyword inside the loop refers to the global scope, not the person object. thats the reason here this will not work instead of person.


class Person {
  constructor(firstName, age, ...address) {
    this.firstName = firstName;
    this.age = age;
    this.address = new Address(...address);
  }
}
class Address{
  constructor(street,city,state,country){
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
  }
}
const person5 = new Person ("Spongebob",30,"124 Conch St.","Dallas","Arizona","USA");
const person6 = new Person ("Patrick",31,"125 Conch St.","Dallas","Arizona","USA");
const person7 = new Person ("Paul",33,"126 Conch St.","Dallas","Arizona","USA");
// accessing the properties inside the nested objects.
console.log(person7.address.street);
console.log(person7.address.city);
console.log(person7.address.state);
console.log(person7.address);
console.log(person7.firstName);

console.log(person7.age);
console.log(person6.firstName);
console.log(person5.firstName);
console.log(person6.age);

