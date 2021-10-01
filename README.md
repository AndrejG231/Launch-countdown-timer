# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Main Solutions](#main-solutions)
    - [Card design](#card-design)
    - [Flipping cards](#flipping-cards)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- When a number changes, make the card flip from the middle

### Screenshot
![Screen Shot](/Screenshot.png?raw=true)
### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/launch-countdown-timer-made-with-webpack-html-sass-typescript-DmwF0X_kQ)
- Live Site URL: [Github pages](https://andrejg231.github.io/Launch-countdown-timer/)

## My process

### Built with

- HTML5
- Sass
- Typescript
- Webpack

### Main solutions

#### Card design

Cards required two reverse rounded corners. Therefore I decided to use a card container with hidden overflow and CSS "before" and "after" pseudoelements, positioned in specified corners, with box shadows covering half of the card each, which resulted in the desired output.

    Main circular shape of corner

```
.card-top:after,
.card-top:before,
.card-bottom:after,
.card-bottom:before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 99px;
  position: absolute;
  transform: translate(50%, -50%);
}
```

    Border radiuses, positioning and card-filling box-shadows around corners.

```
.card-top {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  &:after {
    right: 100%;
    top: 100%;
  }
  &:before {
    right: 0%;
    top: 100%;
  }
  &:after,
  &:before {
    box-shadow: 5px -5px 0px 80px $darkBlue2, 5px -50px 0px 80px $darkBlue2;
  }
}

.card-bottom {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  &:after {
    right: 0%;
    top: 0%;
  }
  &:before {
    right: 100%;
    top: 0%;
  }
  &:after,
  &:before {
    box-shadow: 5px 5px 0px 80px $darkBlue, 5px 50px 0px 80px $darkBlue;
  }
}
```

#### Flipping cards

Cards should display time ticking down each second and flip from the middle when their value changes. I used chains of timeouts in javascript that control each animation sequence.

Each card is consisting of overlaying three parts - whole moving card, static top part and static bottom part, each with its value displayed on exactly same position.

```
<div class="card-top static staticTop">
  <span class="time-count staticTopVal">14</span>
</div>
<div class="card-bottom static staticBottom">
  <span class="time-count bottom staticBottomVal">14</span>
</div>
<div class="card movingCard">
  <span class="time-count movingVal">14</span>
  <div class="card-top"></div>
  <div class="card-bottom"></div>
</div>
```

These parts are used for animation in following sequence:

```
    /*
    Get static-top part behind and load increased value into its dom
      => when spin starts we can see next value in card behind
    Get bottom part visible before first spin to hide bottom side
    of moving card
      => we want to see only one the upper part rotating, so static
      bottom will take care of covering the bottom of moving card
    */

    card.staticTop.style.zIndex = "10";
    card.staticTopVal.innerText = format2digit(time[card.timeKey]);
    card.staticBottom.style.zIndex = "12";

    // Do the first move - up to -90deg, when moving card is invisible
    card.movingCard.style.transform = "perspective(300px) rotateX(-90deg)";
  }

  setTimeout(() => {
    /*
    Timeout of css transition time - for card to move into middle position.
    Now when card is not visible, we want to instantly flip it backwards to
    90deg, without any transition.
      => when animation continues, card will appear to continue spinning
      while it will be just turning back to original position
    */

    card.movingCard.style.transition = "0s all linear";
    card.movingCard.style.transform = "perspective(300px) rotateX(90deg)";

    /*
    Put static top part above the moving card, bottom card behind
    - now we want to see card flipping only on bottom side.
    Change value while card is invisible.
    */

    card.staticTop.style.zIndex = "12";
    card.movingVal.innerText = format2digit(time[card.timeKey]);
    card.staticBottom.style.zIndex = "10";
  }
    setTimeout(() => {
      /*
      Timeout 20 ms for all changed properties load into dom,
      enable transitions and rotate card to original position.
      */
      card.movingCard.style.transition = "0.3s all linear";
      card.movingCard.style.transform = "perspective(300px) rotateX(0deg)";

      setTimeout(() => {
        for (const card of cards) {
          /*
          Increase value of static bottom part right at or after animation ends
          */
          card.staticBottomVal.innerText = format2digit(time[card.timeKey]);
        }
      }, timeout / 2);
    }, 20);
  }, timeout / 2);
};
```

## Author

- Frontend Mentor - [@AndrejG231](https://www.frontendmentor.io/profile/AndrejG231)
- Linkedin - [Andrej Germič](https://www.linkedin.com/in/andrej-germic)
