// DOM Element
const hourEl = document.querySelector(".hour");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const monthsEl = document.querySelector(".month-name");
const daysEl = document.querySelector(".day-name");
const dayNumbersEl = document.querySelector(".day-number");
const yearsEl = document.querySelector(".years");
const periodEl = document.querySelector(".period");
const period = "AM";

//Javascript for switch clock format

//Get current time in javascript
const clock = () => {
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const month = today.getMonth();
    // console.log(today, hour, minutes, seconds, month);
    hourEl.innerHTML = hour;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    monthsEl.innerHTML = month;
    periodEl.innerHTML = setTimePeriod(hour);
};
clock();

//Set the time period(AM/PM)
function setTimePeriod(time) {
    let ampm = "";
    if (time > 12) {
        console.log("Less then 12 hours");
        ampm = "AM";
    } else {
        console.log("Greater then 12 hours");
        ampm = "PM";
    }
    return ampm;
}

// console.log(period);
//Set the 12-hour clock format

//Add the 0 for the values lower than 10
function addZero(time) {}

//Get the date in javascript

//document.querySelector(".year").innerHTML = year;

//Javascript for dot menu toggle

// Events call
const updateTime = setInterval(clock, 1000);
