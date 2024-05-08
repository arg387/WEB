// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from the class (class that owns anything static, not the objects)

class MathUtil{
  static PI = 3.14159;
  static getDiameter(radius){
    
    return radius * 2 + "cm";
  }
  static getCircumference(radius){
    return 2 * this.PI * radius + "cm";
  }
  static getArea(radius){
    return this.PI * radius * radius + "cm^2";
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getArea(10));
console.log(MathUtil.getCircumference(10));

class User{
  static userCount = 0;
  constructor(username){
    this.username = username;
    User.userCount++;
  }
  static printUserCount(){
    console.log(`there are ${User.userCount} users online.`);
  }
  sayHello(){
    console.log(`Hello! ${this.username}`);

  }
}


const user1 = new User ("Spongebob");
const user2= new User("Patrick")
const user3 = new User("Sandy");
console.log(User.userCount);
console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
user1.sayHello();
user2.sayHello();
user3.sayHello();
User.printUserCount();



