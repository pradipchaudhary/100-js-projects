// DOM Elements
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

// Functions
const initClock = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    // Angle of rotation of hands
    const hrHandsRotation = 30 * hours + minutes / 2 + seconds / 120;
    let minHandRotation = 6 * minutes + seconds / 10;
    let secHandRotation = 6 * seconds;

    // now rotate the hands
    hourEl.style.transform = `translateX(-50%) rotate(${hrHandsRotation}deg)`;
    minuteEl.style.transform = `translateX(-50%) rotate(${minHandRotation}deg)`;
    secondEl.style.transform = `translateX(-50%) rotate(${secHandRotation}deg)`;
};

// Event handlers
initClock();
setInterval(initClock, 1000);

// end
