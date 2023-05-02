const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const defaultColor = "#2F737F";
// body default color set
document.body.style.background = defaultColor;

// Variables
const color = document.querySelector("#color");
const btn = document.querySelector("#btn");

color.innerHTML = defaultColor;

btn.addEventListener("click", function () {
	let haxColor = "#";

	for (let i = 0; i < 6; i++) {
		haxColor += hex[getRandomNumber()];
		console.log(i);
	}
	color.textContent = haxColor;
	document.body.style.backgroundColor = haxColor;
});

// Get random number
function getRandomNumber() {
	return Math.floor(Math.random() * hex.length);
}
