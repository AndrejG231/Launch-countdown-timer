import { cardContainer, cardContainerChecked } from "./types";

const checkElements = (cards: cardContainer[]): cardContainerChecked[] => {
  const checkedElements: cardContainerChecked[] = [];
  for (const card of cards) {
    if (
      card.current &&
      card.movingCard &&
      card.movingVal &&
      card.staticBottom &&
      card.staticBottomVal &&
      card.staticTop &&
      card.staticTopVal
    ) {
      checkedElements.push(card as cardContainerChecked);
    } else {
      throw new Error("Could not load necessary card elemnents.");
    }
  }

  return checkedElements;
};

export default checkElements;
