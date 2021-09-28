export type cardContainer = {
  staticTop?: HTMLElement;
  staticBottom?: HTMLElement;
  movingCard?: HTMLElement;
  staticTopVal?: HTMLElement;
  staticBottomVal?: HTMLElement;
  movingVal?: HTMLElement;
  current?: HTMLElement | null;
  timeKey: string;
};

export type time = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
