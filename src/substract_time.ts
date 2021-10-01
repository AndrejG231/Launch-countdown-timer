import { time } from "./types";

const substractTime = (time: time) => {
  time.seconds--;
  if (time.seconds < 0) {
    time.seconds = 59;
    time.minutes--;
  }

  if (time.minutes < 0) {
    time.minutes = 59;
    time.hours--;
  }

  if (time.hours < 0) {
    time.hours = 59;
    time.days--;
  }
};

export default substractTime;
