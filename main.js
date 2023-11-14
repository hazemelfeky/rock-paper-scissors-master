const controlHands = document.getElementsByClassName("controls");
const resContainer = document.getElementById("hande-result");
const resDicision = document.getElementById("result-decision");
const resText = document.getElementById("res-text");
const scoreNumber = document.getElementById("score-number");
let selected = false;
let score = 0;
scoreNumber.innerText = score;

const choices = [
  { name: "rock", src: "./images/icon-rock.svg" },
  { name: "scissors", src: "./images/icon-scissors.svg" },
  { name: "paper", src: "./images/icon-paper.svg" },
];

function showComputerChoice() {
  const options = [0, 2, 5];
  const res = Math.floor(Math.random() * 3);
  setTimeout(() => {
    const computerChoice = choices[res];
    const resImg = document.createElement("img");
    resImg.src = computerChoice.src;
    resContainer.append(resImg);
    resContainer.classList.remove("hide");
    resDicision.classList.remove("hide");
    scoreNumber.innerText = score;
  }, 1000);
  return options[res];
}

function onSelectHand(selectedHand) {
  if (selectedHand.classList.contains("hide") || selected) return;
  selected = true;
  for (const hand of controlHands) {
    if (hand == selectedHand) {
      hand.classList.add("selected");
    } else {
      hand.classList.add("hide");
    }
  }
  const youChoice = selectedHand.attributes["data-value"].value;
  const computerChoice = showComputerChoice();
  calculateResult(youChoice, computerChoice);
}

function reset() {
  for (const hand of controlHands) {
    hand.classList.remove("hide");
    hand.classList.remove("selected");
    resContainer.classList.add("hide");
    resDicision.classList.add("hide");
    while (resContainer.firstChild) {
      resContainer.removeChild(resContainer.firstChild);
    }
    selected = false;
  }
}

for (const hand of controlHands) {
  hand.addEventListener("click", () => {
    onSelectHand(hand);
  });
}

function calculateResult(yourChoice, computerChoice) {
  const options = {
    0: { win: [2], lose: [5] },
    2: { win: [5], lose: [0] },
    5: { win: [0], lose: [2] },
  };
  console.log(yourChoice, computerChoice);
  if (options[yourChoice]["win"].includes(computerChoice)) {
    resText.innerText = "You win!!";
    score++;
  } else if (options[yourChoice]["lose"].includes(computerChoice)) {
    resText.innerText = "You lost as always";
    score--;
  } else {
    resText.innerText = "Draw";
  }
}
