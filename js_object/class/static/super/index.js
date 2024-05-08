// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass).
// this = this Object
// super = the parent

class Animal {
  constructor(name,age){
    this.name = name; 
    this.age = age; 
  }
  
  move(speed){
    console.log(`The ${this.name} can move at a speed of ${speed}mph .`);
  }
}
class Rabbit extends Animal{
  constructor(name,age,runSpeed){
    super(name,age);
    this.runSpeed = runSpeed; 
  }

  run(){
    console.log(`The ${this.name} can run.`);
    super.move(this.runSpeed);


  }

}
class Fish extends Animal{
  constructor(name,age,swimSpeed){
    super(name,age);
    this.swimSpeed = swimSpeed; 
  }

  swim(){
    console.log(`The ${this.name} can swim.`);
    super.move(this.swimSpeed);
  }

}
class Hawk extends Animal{
  constructor(name,age,flySpeed){
    super(name,age);
    this.flySpeed = flySpeed;
  }
  
  fly(){
    console.log(`The ${this.name} can fly.`);
    super.move(this.flySpeed);
  }
}

const rabbit = new Rabbit("Bugs Bunny", 2, 10);
const fish = new Fish("Nemo", 1, 20);

const hawk = new Hawk("Hawkeye", 3, 30);

console.log(rabbit.name);
console.log(rabbit.runSpeed);
console.log(fish.swimSpeed);
console.log(fish.name);
console.log(fish);    
console.log(hawk);

rabbit.run();
hawk.fly();
fish.swim();