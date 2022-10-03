const products = require("./products.json");

// Printing products
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

// Getting all the product names
let productNames = [];

for (let i = 0; i < products.length; i++) {
  productNames.push(products[i].name);
}

console.log(productNames);
