"use strict";

//# BOM

//# Level_1_1

console.log("Start Warten für 3 Sekunden ...");

setTimeout(() => {
  console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
}, 3000);

let counter = 10;

const feierabendCounter = setInterval(() => {
  if (counter > 0) {
    console.log(counter);
    counter--;
    return;
  }
  console.log("Endlich Feierabend!");
  clearInterval(feierabendCounter);
}, 1000);

//# Level_1_2

const percentCountBtn = document.querySelector("#btn");
const percentOutput = document.querySelector(".zeit");
let percentCount = 100;
let btn_click = false;

const start = () => {
  btn_click = true;
  if (btn_click) {
    const percentCounter = setInterval(() => {
      if (percentCount > 0) {
        percentCount--;
        percentOutput.textContent = `${percentCount}%`;
        return;
      }
      clearInterval(percentCounter);
    }, 100);
  }
};

percentCountBtn.addEventListener("click", start);

//# Level_1_3

const logeBrowserInfos = () => {
  console.log(window.navigator.userAgent);
  console.log(window);
};

logeBrowserInfos();

//# Level_2_1

const countOutput = document.querySelector("#count");
const messageDiv = document.querySelector(".message");

const counter_2_1 = setInterval(() => {
  if (counter > 0) {
    counter--;
    countOutput.textContent = counter;
    return;
  }
  messageDiv.classList.add("hidden");
  clearInterval(counter_2_1);
}, 1000);

//# Level_3_2

const timerInput = document.querySelector("#minutes");
const startBtn = document.querySelector(".start_btn");
const timerOutput = document.querySelector("#time");
const pauseBtn = document.querySelector(".pause_btn");
const restartBtn = document.querySelector(".restart_btn");

const oneHour = 1 * 60 * 60 * 1000;
let countdownInterval;
let minutes;
let timerRunning = false;

const startMinCountdown = (event) => {
  if (event.target.dataset.btn === "start") {
    minutes = Number(timerInput.value) * 60 * 1000;
  }
  if (!timerRunning) {
    timerInput.value = "";
    timerRunning = true;
    countdownInterval = setInterval(() => {
      const minutesAsDate = new Date(minutes - oneHour);
      timerOutput.textContent = `${minutesAsDate.toLocaleTimeString("de", { minute: "2-digit", second: "2-digit" })}`;
      minutes = minutes - 1000;
      if (minutes >= 0) {
        return;
      }
      clearInterval(countdownInterval);
    }, 1000);
  }
};

startBtn.addEventListener("click", startMinCountdown);

pauseBtn.addEventListener("click", () => {
  clearInterval(countdownInterval);
  timerRunning = false;
});

restartBtn.addEventListener("click", startMinCountdown);
