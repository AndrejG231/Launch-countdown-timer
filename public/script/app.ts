// Rotating cards
// const staticTop = document.getElementById("staticTop");
// const staticBottom = document.getElementById("staticBottom");
const movingCard = document.getElementById("movingCard");

const rotatingCard = () => {
  // Animations enabled
  // Go to start position
  if (movingCard) {
    setTimeout(() => {
      movingCard.style.transform = "perspective(300px) rotateX(-10deg)";
      setTimeout(() => {
        movingCard.style.transform = "perspective(300px) rotateX(-90deg)";
        setTimeout(() => {
          movingCard.style.transition = "0s all linear";
          movingCard.style.transform = "perspective(300px) rotateX(90deg)";
          setTimeout(() => {
            movingCard.style.transition = "0.3s all linear";
            movingCard.style.transform = "perspective(300px) rotateX(10deg)";
            setTimeout(() => {
              movingCard.style.transform = "perspective(300px) rotateX(0deg)";
            }, 500);
          }, 10);
        }, 500);
      }, 50);
    }, 50);
  }
};

setInterval(() => rotatingCard(), 6000);
