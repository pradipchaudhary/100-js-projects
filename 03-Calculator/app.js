// Select DOM element
const buttonsEl = document.querySelectorAll("button");
let displayEl = document.querySelector(".display");

const array = Array.from(buttonsEl);

array.forEach(function (button) {
    button.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
        displayEl.value = e.target.innerHTML;
    });
});

// console.log(array);
