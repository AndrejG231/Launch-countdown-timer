import "./styles/main.scss";
import getElements from "./get_elements";
import rotateCard from "./rotate_card";
import substractTime from "./substract_time";
import { time } from "./types";
import { format2digit } from "./utility";
import checkElements from "./check_elements";

const { days, hours, minutes, seconds } = getElements();
const cards = checkElements([days, hours, minutes, seconds]);

const time = {
  days: 14,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const runCycle = () => {
  substractTime(time as time);
  // Get containers that change
  const toAnimate = cards.filter(
    (container) =>
      format2digit(time[container.timeKey]) !== container.movingVal?.innerText
  );

  // Pass changed container into animate function
  rotateCard(toAnimate, time);
};

setInterval(runCycle, 1000);
