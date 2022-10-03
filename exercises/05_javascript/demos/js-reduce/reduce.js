const products = require("./products.json");
const vat = 1.24;

// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const totalPrice = products.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue.price);
}, 0);

console.log(totalPrice.toFixed(2));

const modifiedProducts = products.reduce((accumulator, currentValue) => {
  const newItem = {
    productName: currentValue.name,
    priceWithVAT: (currentValue.price * vat).toFixed(2),
  };

  return [...accumulator, newItem];
}, []);

console.log(modifiedProducts);
