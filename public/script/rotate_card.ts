import { cardContainer } from "./types";
import { format2digit } from "./utility";

const timeout = 600;

const rotateCard = (container: cardContainer, count: number) => {
  const {
    staticTop,
    staticTopVal,
    staticBottom,
    staticBottomVal,
    movingCard,
    movingVal,
  } = container;
  if (
    staticTop &&
    staticTopVal &&
    staticBottom &&
    staticBottomVal &&
    movingCard &&
    movingVal
  ) {
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
  }
};

export default rotateCard;
