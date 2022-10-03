const products = require("./products.json");
const vat = 1.24;

let totalPrice = 0;

// Calculate the total price
for (let i = 0; i < products.length; i++) {
  totalPrice += products[i].price;
}

console.log(totalPrice.toFixed(2));

let modifiedProducts = [];

for (let i = 0; i < products.length; i++) {
  const newProduct = {
    productName: products[i].name,
    priceWithVAT: (products[i].price * vat).toFixed(2),
  };

  modifiedProducts.push(newProduct);
}

console.log(modifiedProducts);
