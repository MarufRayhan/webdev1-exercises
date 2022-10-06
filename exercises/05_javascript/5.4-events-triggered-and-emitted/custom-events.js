//DICE 1
const DICE_ONE = document.getElementById("ones").childNodes[3];
const ELEMENT_FRAGMENT_1 = document.getElementById("template1").content;
//DICE 2
const DICE_TWO = document.getElementById("twos").childNodes[3];
const ELEMENT_FRAGMENT_2 = document.getElementById("template2").content;
//DICE 3
const DICE_THREE = document.getElementById("threes").childNodes[3];
const ELEMENT_FRAGMENT_3 = document.getElementById("template3").content;
//DICE 4
const DICE_FOUR = document.getElementById("fours").childNodes[3];
const ELEMENT_FRAGMENT_4 = document.getElementById("template4").content;
//DICE 5
const DICE_FIVE = document.getElementById("fives").childNodes[3];
const ELEMENT_FRAGMENT_5 = document.getElementById("template5").content;
//DICE 6
const DICE_SIX = document.getElementById("sixes").childNodes[3];
const ELEMENT_FRAGMENT_6 = document.getElementById("template6").content;

COUNT = 0;
COUNT_1 = 0;
COUNT_2 = 0;
COUNT_3 = 0;
COUNT_4 = 0;
COUNT_5 = 0;
COUNT_6 = 0;

// const alldots = Array.from(document.querySelectorAll("#rolls div"));

const dice = document
  .getElementById("roll-button")
  .addEventListener("click", (e) => {
    COUNT++;
    rollDice();
  });

function changeRollButton(template) {
  const changeButton = document.getElementById("roll-button");
  changeButton.querySelector("span").replaceWith(template);
}

document.addEventListener("rollDice", function (e) {
  diceValue = e.detail.value;
  console.log(diceValue);

  if (diceValue === 1) {
    COUNT_1++;
    DICE_ONE.textContent = COUNT_1;
    var template = document.importNode(ELEMENT_FRAGMENT_1, true);
    changeRollButton(template);
  } else if (diceValue === 2) {
    COUNT_2++;
    DICE_TWO.textContent = COUNT_2;
    var template = document.importNode(ELEMENT_FRAGMENT_2, true);
    changeRollButton(template);
  } else if (diceValue === 3) {
    COUNT_3++;
    DICE_THREE.textContent = COUNT_3;
    var template = document.importNode(ELEMENT_FRAGMENT_3, true);
    changeRollButton(template);
  } else if (diceValue === 4) {
    COUNT_4++;
    DICE_FOUR.textContent = COUNT_4;
    var template = document.importNode(ELEMENT_FRAGMENT_4, true);
    changeRollButton(template);
  } else if (diceValue === 5) {
    COUNT_5++;
    DICE_FIVE.textContent = COUNT_5;
    var template = document.importNode(ELEMENT_FRAGMENT_5, true);
    changeRollButton(template);
  } else if (diceValue === 6) {
    COUNT_6++;
    DICE_SIX.textContent = COUNT_6;
    var template = document.importNode(ELEMENT_FRAGMENT_6, true);
    changeRollButton(template);
  } else {
    console.log("No data!");
  }

  let totalCount = document.querySelector("#totals").querySelector("span");
  totalCount.innerHTML = COUNT;
});
