// Rotating card parts
const staticTop = document.getElementById("staticTop");
const staticBottom = document.getElementById("staticBottom");
const movingCard = document.getElementById("movingCard");

// Card values
const staticTopVal = document.getElementById("staticTopVal");
const staticBottomVal = document.getElementById("staticBottomVal");
const movingVal = document.getElementById("movingVal");

//
const timeout = 600;
let count = 0;

const format2digit = (num: number) => {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
};

if (
  staticTop &&
  staticBottom &&
  movingCard &&
  staticTopVal &&
  staticBottomVal &&
  movingVal
) {
  // Default z-indexes for cards
  staticTop.style.zIndex = "10";
  staticBottom.style.zIndex = "10";
  movingCard.style.zIndex = "11";

  const rotatingCard = () => {
    // Increase value before each spin
    count++;
    // Animations enabled
    // Go to start position

    // Get static top behind and load increased value into its dom
    staticTop.style.zIndex = "10";
    staticTopVal.innerText = format2digit(count);

    // Get bottom part visible before first spin to hide bottom side of moving card
    staticBottom.style.zIndex = "12";

    movingCard.style.transform = "perspective(300px) rotateX(-90deg)";
    setTimeout(() => {
      staticTop.style.zIndex = "12";
      movingCard.style.transition = "0s all linear";
      movingCard.style.transform = "perspective(300px) rotateX(90deg)";
      //  Change numbers and move static bottom card behind when card is at 90deg -- bottom part of moving card and value is not vissible
      movingVal.innerText = format2digit(count);
      staticBottom.style.zIndex = "10";
      setTimeout(() => {
        movingCard.style.transition = "0.3s all linear";
        movingCard.style.transform = "perspective(300px) rotateX(0deg)";
        // 
        setTimeout(
          () => (staticBottomVal.innerText = format2digit(count)),
          180
        );
      }, 30);
    }, timeout / 2);
  };

  setInterval(() => rotatingCard(), 1000);
}
