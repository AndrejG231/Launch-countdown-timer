import { cardContainerChecked, time } from "./types";
import { format2digit } from "./utility";

const timeout = 600;

const rotateCard = (cards: cardContainerChecked[], time: time) => {
  for (const card of cards) {
    // Get static top behind and load increased value into its dom
    card.staticTop.style.zIndex = "10";
    card.staticTopVal.innerText = format2digit(time[card.timeKey]);

    // Get bottom part visible before first spin to hide bottom side of moving card
    card.staticBottom.style.zIndex = "12";

    card.movingCard.style.transform = "perspective(300px) rotateX(-90deg)";
  }
  setTimeout(() => {
    for (const card of cards) {
      card.staticTop.style.zIndex = "12";
      card.movingCard.style.transition = "0s all linear";
      card.movingCard.style.transform = "perspective(300px) rotateX(90deg)";
      //  Change numbers and move static bottom card behind when card is at 90deg -- bottom part of moving card and value is not vissible
      card.movingVal.innerText = format2digit(time[card.timeKey]);
      card.staticBottom.style.zIndex = "10";
    }
    setTimeout(() => {
      for (const card of cards) {
        card.movingCard.style.transition = "0.3s all linear";
        card.movingCard.style.transform = "perspective(300px) rotateX(0deg)";
        //
      }
      setTimeout(() => {
        for (const card of cards) {
          card.staticBottomVal.innerText = format2digit(time[card.timeKey]);
        }
      }, timeout / 2);
    }, 20);
  }, timeout / 2);
};

export default rotateCard;
