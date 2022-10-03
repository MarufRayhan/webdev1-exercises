const products = require("./products.json");

// Sort modifies the original array
const initial = [...products];
console.log(products[0].name === initial[0].name); // true
const sorted = initial.sort((a, b) => a.price - b.price);
console.log(products[0].name === initial[0].name); // false

// Always create a copy of the array that you are trying to sort
const secondTry = [...products];
console.log(products[0].name === secondTry[0].name); // true
const sortedProducts = [...secondTry].sort((a, b) => a.price - b.price);
console.log(products[0].name === secondTry[0].name); // true

// Locale compare should be used when comparing strings
const sortedString = [...products].sort((a, b) => a.name.localeCompare(b.name, "en"));
console.log(sortedString);