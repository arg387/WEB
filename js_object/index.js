//  ⁡⁣⁣⁢object = A collection of related properties and/or methods Can represent real world objects (people, products, places)⁡
//                      ⁡⁣⁣⁢object = {(key:value,function()}⁡
    
                    

const person1 = {
  name : "Spongebob",
  lastName : "Squarepants",
  age : 30,
  isEmployed : true,
  favFood : "Hamburger",
  sayHello: function(){console.log(`I am ${this.name}!`)},
  eat :function(){console.log(`I eat ${this.favFood}.`)},

}
const person2 = {
  name : "Patrick",
  lastName : "Dallas",
  age : 32,
  isEmployed: false,
  favFood : "Fish",
  sayHello: function(){console.log(`I am ${this.name}!`)},
 /*  eat :()=>{console.log(`I eat ${this.favFood}.`)}, */
  
  // arrow function does not work with this.
  
  
  eat :()=>{console.log(`I eat ${person2.favFood}.`)},

}

// ⁡⁣⁣⁢this = reference of the object where This is used(the object depends on the immediate context )⁡

// ⁡⁣⁢⁣person.name = this.name⁡
console.log(person1.age);
console.log(person1.isEmployed);
console.log(person1.lastName);
console.log(person1.name);
console.log(person2.name);
console.log(person2.age);
console.log(person2.lastName);
console.log(person2.isEmployed);
person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();

//⁡⁣⁣⁢ methods are functions that a object can perform. ⁡⁣⁣⁢eat,sayHello are the methods here.⁡