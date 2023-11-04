const hands = document.getElementsByClassName("hand");
const resContainer = document.getElementById("hande-result");

function onSelectHand(selectedHand) {
  if (selectedHand.classList.contains("hide")) return;
  for (const hand of hands) {
    if (hand == selectedHand) {
      hand.classList.add("selected");
    } else {
      hand.classList.add("hide");
    }
  }
}

for (const hand of hands) {
  hand.addEventListener("click", () => {
    onSelectHand(hand);
  });
}
