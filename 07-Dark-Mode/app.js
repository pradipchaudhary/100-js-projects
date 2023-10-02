// DOM Elements
const title = document.querySelector(".title");
const toggleButton = document.querySelector(".toggleImage");

// Functions
toggleButton.addEventListener("click", function (e) {
    if (toggleButton.src.includes("light")) {
        title.innerHTML = "Click for Light mode.";
        toggleButton.src = "dark.png";
        document.body.classList.add("dark");
    } else if (toggleButton.src.includes("dark")) {
        title.innerHTML = "Click for Dark mode.";
        toggleButton.src = "light.png";
        document.body.classList.remove("dark");
    }
});
