// DOM Elements
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// Functions
const initClock = () => {
  console.log("ini Clock ⏲️");
  const time = new Date();
  console.log(time);
};

// Event handlers
initClock();
