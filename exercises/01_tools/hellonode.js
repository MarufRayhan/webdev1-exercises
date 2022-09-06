const _ = require("lodash");
    // const ver = _.VERSION;
    // console.log(ver);  
function hithere(array){
    let firstValue = _.first(array);
    let lastvalue = _.last(array);
    
    return lastvalue+firstValue
}

console.log(hithere(["hello", "goodbye", "alpha", "omega", "edge", "node"]))

module.exports = hithere;