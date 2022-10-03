const products = require("./products.json");
const lowOnStockLimit = 100;

let lowOnStock = [];

// Get products with low amount in stock
for (let i = 0; i < products.length; i++) {
  if (products[i].numberInStock < lowOnStockLimit) {
    lowOnStock.push(products[i]);
  }
}

console.log(lowOnStock);

let lowOnStockNames = [];

// Get product names with low amount in stock
for (let i = 0; i < lowOnStock.length; i++) {
  lowOnStockNames.push(lowOnStock[i].name);
}

console.log(lowOnStockNames);
