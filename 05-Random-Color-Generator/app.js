const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const defaultColor = "#2F737F";
// body default color set
document.body.style.background = defaultColor;

// Variables
const color = document.querySelector("#color");
const btn = document.querySelector("#btn");
const copyBtn = document.querySelector("#copyBtn");

color.innerHTML = defaultColor;

// Get random number
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function () {
    let haxColor = "#";

    for (let i = 0; i < 6; i++) {
        haxColor += hex[getRandomNumber()];
    }
    color.textContent = haxColor;
    document.body.style.backgroundColor = haxColor;
});

// Copy to clipboard
const copyToClipBoard = () => {
    navigator.clipboard
        .writeText(color.innerText)
        .then(() => {
            alert(`${color.innerText} Copy to clipboard !  `);
        })
        .catch(() => {
            alert("Couldn't copy to clipboard ");
        });
};

copyBtn.addEventListener("click", copyToClipBoard);
