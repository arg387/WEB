// inheritance = allows a new class to inherit properties and method from an existing class(parent --> child ) helps with code reusability.

class Animal {
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating.`);
  }
  sleep(){
    console.log(`This ${this.name} is sleeping.`);
  }
}
class Rabbit extends Animal{
  name = 'Rabbit';
  run(){
    console.log(`This ${this.name} is running.`);
  }
}
class Snake extends Animal{
  name = 'Snake';
}
class Hawk extends Animal{
  name = 'Hawk';
  fly(){
    console.log(`This ${this.name} is flying.`);
  }
}
const rabbit = new Rabbit();
const snake = new Snake();
const hawk = new Hawk();
rabbit.eat();
rabbit.sleep();
rabbit.run();
rabbit.alive = false;
snake.sleep();
snake.eat();
console.log(rabbit.alive);



snake.alive = false;
hawk.eat();


console.log(snake.alive);
console.log(hawk.alive);
hawk.sleep();
hawk.fly();
