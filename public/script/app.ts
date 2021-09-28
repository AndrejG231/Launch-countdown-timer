// Rotating cards
// const staticTop = document.getElementById("staticTop");
// const staticBottom = document.getElementById("staticBottom");
const movingCard = document.getElementById("movingCard");
const timeout = 600;

const rotatingCard = () => {
  // Animations enabled
  // Go to start position
  if (movingCard) {
    movingCard.style.transform = "perspective(300px) rotateX(-90deg)";
    setTimeout(() => {
      movingCard.style.transition = "0s all linear";
      movingCard.style.transform = "perspective(300px) rotateX(90deg)";
      setTimeout(() => {
        movingCard.style.transition = "0.3s all linear";
        movingCard.style.transform = "perspective(300px) rotateX(0deg)";
      }, 30);
    }, timeout / 2);
  }
};

setInterval(() => rotatingCard(), 1000);
