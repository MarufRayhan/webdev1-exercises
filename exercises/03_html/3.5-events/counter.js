const MAXIMUM_VALUE = 5
const MINIMUM_VALUE = -5

const incrementCount = document.getElementById("increment");
const decrementCount = document.getElementById("decrement")
const resetCount = document.getElementById("reset")
const totalCount =  document.getElementById("counter")

var count = 0;
totalCount.innerHTML = count

handleIncrement = (()=>{
    count++;
    if (count > MAXIMUM_VALUE) {
        count = MINIMUM_VALUE
    }
    totalCount.innerHTML = count
    console.log(count)
})

handleDecrement = (()=>{
    count--;
    if (count < MINIMUM_VALUE) {
        count = MAXIMUM_VALUE
    }
    totalCount.innerHTML = count
    console.log(count)
})

handleReset = (()=>{
    count = 0;
    totalCount.innerHTML = count
    console.log(count)
})

incrementCount.addEventListener("click", handleIncrement)
decrementCount.addEventListener("click", handleDecrement)
resetCount.addEventListener("click", handleReset)