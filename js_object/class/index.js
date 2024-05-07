// class = (ES6 feature) provides a structured and cleaner way to work with objects compared to traditional constructor functions ex. static keyword, encapsulation , inheritance. 

class Product {
  constructor(name,price){
    this.name = name;
    this.price = price;
  }
  displayProduct(){
    console.log(`The cost of ${this.name} is $${this.price.toFixed(2)}`)
  }
  calculateTotal(salesTax){
    return this.price + (this.price * salesTax);
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt",19.99);  
const product2 = new Product("Pant",29.99);  
const product3 = new Product("Jeans",34.99);  

product3.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`The total cost of ${product1.name} is $${total.toFixed(2)}`);

