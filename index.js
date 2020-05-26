/* eslint-disable no-use-before-define */
/* eslint-disable no-new */

'use strict';

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor(id, date) {
    this.selector = id;
    this.targetDate = new Date(date);
  }

  start() {
    let currentTime = Date.now();
    let deltaTime = this.targetDate - currentTime;
    updateDate(deltaTime);
    this.selector = setInterval(() => {
      currentTime = Date.now();
      deltaTime = this.targetDate - currentTime;
      updateDate(deltaTime);
    }, 1000);
  }
}

function updateDate(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

// start('Januar 1, 2021');
const newTimer = new CountdownTimer(1, 'Januar 1, 2021');
newTimer.start();
