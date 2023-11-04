const hands = document.getElementsByClassName("hand");
const resContainer = document.getElementById("hande-result");

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
  }, 1000);
}

function onSelectHand(selectedHand) {
  if (selectedHand.classList.contains("hide")) return;
  for (const hand of hands) {
    if (hand == selectedHand) {
      hand.classList.add("selected");
    } else {
      hand.classList.add("hide");
    }
  }
  showComputerChoice();
}

for (const hand of hands) {
  hand.addEventListener("click", () => {
    onSelectHand(hand);
  });
}
