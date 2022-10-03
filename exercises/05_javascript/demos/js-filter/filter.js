const products = require("./products.json");
const lowOnStockLimit = 100;

// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const lowOnStock = products.filter(
  (product) => product.numberInStock < lowOnStockLimit
);

console.log(lowOnStock);

const lowOnStockNames = products
  .filter((product) => product.numberInStock < lowOnStockLimit)
  .map((product) => product.name);

console.log(lowOnStockNames);
