const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
	this.classList.toggle("fa-moon");
	body.classList.toggle("dark");
});
