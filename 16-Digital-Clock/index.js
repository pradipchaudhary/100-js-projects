// DOM Element
const hourEl = document.querySelector(".hour");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const monthsEl = document.querySelector(".month-name");
const daysEl = document.querySelector(".day-name");
const dayNumbersEl = document.querySelector(".day-number");
const yearsEl = document.querySelector(".years");
const periodEl = document.querySelector(".period");

//Javascript for switch clock format

//Get current time in javascript
const clock = () => {
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const month = today.getMonth();
    hourEl.innerHTML = addZero(period(hour));
    minutesEl.innerHTML = addZero(minutes);
    secondsEl.innerHTML = addZero(seconds);
    monthsEl.innerHTML = month;
    periodEl.innerHTML = setTimePeriod(hour);
};
clock();

//Set the time period(AM/PM)
function setTimePeriod(time) {
    let ampm = "";
    if (time < 12) {
        ampm = "AM";
    } else {
        ampm = "PM";
    }
    return ampm;
}

//Set the 12-hour clock format
function period(time) {
    if (time > 12) {
        time = time - 12;
        return time;
    }
    return time;
}
//Add the 0 for the values lower than 10
function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

// Events call
const updateTime = setInterval(clock, 1000);
