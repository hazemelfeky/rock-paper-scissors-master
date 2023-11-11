const controlHands = document.getElementsByClassName("controls");
const resContainer = document.getElementById("hande-result");
const resDicision = document.getElementById("result-decision");
let selected = false;

const choices = [
  { name: "rock", src: "./images/icon-rock.svg" },
  { name: "scissors", src: "./images/icon-scissors.svg" },
  { name: "paper", src: "./images/icon-paper.svg" },
];

function showComputerChoice() {
  const res = Math.floor(Math.random() * 3);
  setTimeout(() => {
    const computerChoice = choices[res];
    const resImg = document.createElement("img");
    resImg.src = computerChoice.src;
    resContainer.append(resImg);
    resContainer.classList.remove("hide");
    resDicision.classList.remove("hide");
  }, 1000);
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
  showComputerChoice();
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
