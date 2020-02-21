let sum = 0;
let images = document.getElementById("dice");
let button = document.getElementById("press");
let sumTag = document.getElementById("sum");
let resultTag = document.getElementById("result");
// let reset = document.getElementById("reset");

button.addEventListener("click", () => {
  button.innerText = "Roll Dice";
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  sum += randomNumber;
  images.setAttribute("src", `./img/dice${randomNumber}.png`);
  sumTag.innerText = randomNumber;

  if (randomNumber < 2) {
    sum = 0;
    resultTag.innerText = "You have lost.";
    button.innerText = "Start Again";
  } else if (sum > 19) {
    resultTag.innerText = "You have won.";
    sum = 0;
    button.innerText = "Start Again";
  } else {
    resultTag.innerText = `Total: ${sum}`;
  }
});
