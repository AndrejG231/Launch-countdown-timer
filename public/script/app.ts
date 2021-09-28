import getElements from "./get_elements";
import { format2digit } from "./utility";

const { days, hours, minutes, seconds } = getElements();

const time = {
  days: 24,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

//

const runCycle = () => {
  for (const container of [days, hours, minutes, seconds]) {
    let count = 0;
    const {
      staticTop,
      staticBottom,
      movingCard,
      staticTopVal,
      staticBottomVal,
      movingVal,
    } = container;
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
    }
  }
};

setInterval(runCycle, 1000);
