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
    progressBarEl.innerHTML = `${scrollValue}`;
}

window.onscroll = scrollPercent;
