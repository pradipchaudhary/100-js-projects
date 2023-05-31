const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const title = document.querySelector(".title");

toggle.addEventListener("click", function () {
    this.classList.toggle("fa-moon");
    body.classList.toggle("dark");
    if (body.classList == "dark") {
        title.innerHTML = "Click for light 🌄 mode.";
        console.log("This is dark mood");
    } else {
        title.innerHTML = `Click for dark🌑 mode.`;
        console.log("This is light mood");
    }
});
