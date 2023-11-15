// Select DOM element
const buttonsEl = document.querySelectorAll("button");
const disabledEl = document.querySelector(".display");

// const array = [];

// for (let i = 0; i < buttonsEl.length; i++) {
//     // console.log(i);
//     array.push(buttonsEl[i].value);
//     console.log(array.push(buttonsEl[i]));
// }
const array = Array.from(buttonsEl);

array.forEach(function (button) {
    console.log(button.innerHTML);
});

// console.log(array);
