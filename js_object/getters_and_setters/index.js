// getter = special method that makes the code readable.
// setter = special method that makes the code writable.
// validate and modify a value when reading/writing a property.

class Rectangle{ 
  constructor (width, height){ 
  this.width = width; 
  this.height = height; }
      // input validation using set method
    set width(newWidth){
      if(newWidth > 0){
        this ._width = newWidth; 

      }
      else {
        console.error( "Width must be a positive number." );
      }
    }

    set height(newHeight){
      if(newHeight > 0){
        this ._height = newHeight; 

      }
      else {
        console.error( "Height must be a positive number." );
      }
    }
    get width(){
      return `${this. _width.toFixed(1)}cm`; 
    }
    get height(){
      return `${this. _height.toFixed(1)}cm`;
    }
    get area(){
      return `${(this. _width * this. _height).toFixed(1)}cm^2`;
    }


}
// area is not a property  but we can access it here like this.
  const rectangle = new Rectangle(10,3) ;
  console. log(rectangle.width) ; 
  console. log(rectangle.height) ; 
  console.log(rectangle.area);

  // Input validation is performed to ensure only properly formed data is entering the workflow in an information system, preventing malformed data from persisting in the database and triggering malfunction of various downstream components. Input validation should happen as early as possible in the data flow, preferably as soon as the data is received from the external party.


  //////////////////////////////////////////////

  class Person{ 
    constructor (firstName, lastName, age){
      this.firstName= firstName; 
      this.lastName = lastName; 
      this.age = age; 
    }

    set firstName(newFirstName) { 
    if(typeof newFirstName === "string"&& newFirstName.length > 0 ){
      this._firstName = newFirstName; 
    }
    
    else{ 
 
    console.log("It must be a non-empty string.") ;}
    }
    set lastName(newLastName) { 
    if(typeof newLastName === "string"&& newLastName.length > 0 ){
      this._lastName = newLastName; 
    }
    
    else{ 
 
    console.log("It must be a non-empty string. ") ;}
    }
    set age(newAge) { 
    if(typeof newAge === "number" && newAge >= 0 ){
      this._age = newAge; 
    }
    
    else{ 
 
    console.log("It must be a non-negative number.") ;}
    }
    get firstName(){
      return this._firstName;
    }
    get lastName(){
      return this._lastName;
    }
    get age()
    {
      return this._age;
    }    
    get fullName(){
      return `${this._firstName} ${this.lastName} is ${this.age} years old.`;
    }
  }
    
  const person = new Person("Pizza", "hut", 40); 
  console.log( person.firstName) ; 
  console.log( person.lastName) ; 
  console.log( person.age);
  console.log( person.fullName);
