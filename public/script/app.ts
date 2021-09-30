import getElements from "./get_elements";
import rotateCard from "./rotate_card";
import substractTime from "./substract_time";
import { time } from "./types";
import { format2digit } from "./utility";
import "../styles/main.scss";

const { days, hours, minutes, seconds } = getElements();

const time: { [key in string]: number } = {
  days: 14,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

//

const runCycle = () => {
  substractTime(time as time);
  for (const container of [days, hours, minutes, seconds]) {
    if (
      format2digit(time[container.timeKey]) !== container.movingVal?.innerText
    ) {
      console.log(
        format2digit(time[container.timeKey]),
        container.movingVal?.innerText
      );
      rotateCard(container, time[container.timeKey]);
    }
  }
};

setInterval(runCycle, 1000);
