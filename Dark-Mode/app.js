const toggle = document.getElementById("toggleButton");
const body = document.querySelector("body");
const title = document.querySelector(".title");

// toggle.addEventListener("click", function () {
//     this.classList.toggle("fa-moon");
//     // body.classList.toggle("dark");
//     // if (body.classList == "dark") {
//     //     title.innerHTML = "Click for light 🌄 mode.";
//     //     console.log("This is dark mood");
//     // } else {
//     //     title.innerHTML = `Click for dark🌑 mode.`;
//     //     console.log("This is light mood");
//     // }
// });

const toogleButton = () => {
    const imgById = document.getElementById("toggleButton");
    if (imgById.src == "dark.png") {
        document.getElementById("toggleButton").src = "light.png";
        console.log("hello");
    } else if (imgById.src == "light.png") {
        document.getElementById("toggleButton").src = "dark.png";
        console.log("Hi");
    }
};

// const img = document.querySelector("img").src;
// const imgById = document.getElementById("toggleButton").src;

// console.log(img);
// console.log(imgById);

toggle.addEventListener("click", toogleButton);
