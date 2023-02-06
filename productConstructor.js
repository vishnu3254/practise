class Product{
  constructor(brand,price,model)
  {
    this.brand = brand;
    this.price = price;
    this.model = model;
  }

  getDiscountPrice(discount){
    return (this.price*discount)/100;
  }
}

let product1 = new Product("rarerabbit",2500,"one")
let product2 = new Product("wrogn",3000,"one")
let product3 = new Product("sketch",5000,"one")
let product4 = new Product("highlander",1000,"one")
let product5 = new Product("fashion",2300,"one")


console.log(product1.getDiscountPrice(10));
console.log(product2.getDiscountPrice(15));
console.log(product3.getDiscountPrice(10));
console.log(product4.getDiscountPrice(20));
console.log(product5.getDiscountPrice(10));
