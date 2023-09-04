// DOM Element

const progressEl = document.querySelector(".progress");
const progressBarEl = document.querySelector(".progress-bar");

function scrollPercent() {
    const scrollPosition = document.documentElement.scrollTop;
    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    // Convert total height to percentage
    const scrollValue = Math.round((scrollPosition * 100) / totalHeight);
    progressBarEl.innerHTML = `${scrollValue} <span>% </span>`;
    // progressBarEl.innerText = `${scrollValue}`;
}

window.onscroll = scrollPercent;
// console.log(progressEl.innerHTML);
// console.log(progressEl.innerText);
