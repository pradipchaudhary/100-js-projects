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
    console.log(today, hour, minutes, seconds, month);
    hourEl.innerHTML = hour;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    monthsEl.innerHTML = month;
    if (hour > 12) {
        period.innerHTML = "PM";
    } else {
        periodEl.innerHTML = period;
    }
};
clock();

const updateTime = setInterval(clock, 1000);

//Set the time period(AM/PM)

//Set the 12-hour clock format

//Add the 0 for the values lower than 10

//Get the date in javascript

//document.querySelector(".year").innerHTML = year;

//Javascript for dot menu toggle
