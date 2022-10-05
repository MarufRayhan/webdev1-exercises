count = 0;
const alldots = Array.from(document.querySelectorAll("#rolls div"));
const dice = document
  .getElementById("roll-button")
  .addEventListener("click", (e) => {
    count++;
    rollDice();
  });

document.addEventListener("rollDice", function (e) {
  diceValue = e.detail.value;
  console.log(diceValue);

  if (diceValue === 1) {
    document.getElementById("ones").childNodes[3].textContent = diceValue;
  } else if (diceValue === 2) {
    document.getElementById("twos").childNodes[3].textContent = diceValue;
  } else if (diceValue === 3) {
    document.getElementById("threes").childNodes[3].textContent = diceValue;
  } else if (diceValue === 4) {
    document.getElementById("fours").childNodes[3].textContent = diceValue;
  } else if (diceValue === 5) {
    document.getElementById("fives").childNodes[3].textContent = diceValue;
  } else if (diceValue === 6) {
    document.getElementById("sixes").childNodes[3].textContent = diceValue;
  } else {
    console.log("error");
  }

  let haha = document.querySelector("#totals");
  haha.innerHTML = `<p>Total rolls: <span>${count}</span></p>`;
  // let spanTag = document.getElementById("totals").childNodes[0]
  // spanTag.innerHTML = e.detail.value;
});
