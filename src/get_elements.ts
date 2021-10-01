import { cardContainer } from "./types";

const getElements = () => {
  // Main card containers
  const days: cardContainer = {
    current: document.getElementById("days"),
    timeKey: "days",
  };
  const hours: cardContainer = {
    current: document.getElementById("hours"),
    timeKey: "hours",
  };
  const minutes: cardContainer = {
    timeKey: "minutes",
    current: document.getElementById("minutes"),
  };
  const seconds: cardContainer = {
    timeKey: "seconds",
    current: document.getElementById("seconds"),
  };

  const containers: cardContainer[] = [days, hours, minutes, seconds];

  for (let i = 0; i < containers.length; i++) {
    const container = containers[i];
    if (container.current) {
      // Rotating card parts
      container.staticTop = container.current.querySelector(
        ".staticTop"
      ) as HTMLElement;
      container.staticBottom = container.current.querySelector(
        ".staticBottom"
      ) as HTMLElement;
      container.movingCard = container.current.querySelector(
        ".movingCard"
      ) as HTMLElement;

      //   Card values
      container.staticTopVal = container.current.querySelector(
        ".staticTopVal"
      ) as HTMLElement;
      container.staticBottomVal = container.current.querySelector(
        ".staticBottomVal"
      ) as HTMLElement;
      container.movingVal = container.current.querySelector(
        ".movingVal"
      ) as HTMLElement;
    } else {
      throw new Error("Could not find specified card container.");
    }
  }

  return { days, hours, minutes, seconds };
};

export default getElements;
