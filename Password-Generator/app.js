// 1. change password length function
// DOM Element
let passwordLength = 8;
let isUpperCase = false;
let isNumbers = false;
let isSymbols = false;

const passwordRangeValue = document.getElementById("passwordRangeValue");
const passwordRangeInput = document.getElementById("passwordRangeInput");
const generateButton = document.getElementById("generateButton");
const passwordEl = document.getElementById("password");

const generatePasswordLength = (e) => {
	passwordLength = parseInt(e.target.value);
	passwordRangeValue.innerText = passwordLength;
};

const generatePassword = (passwordLength) => {
	const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
	const upperCaseLetters = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
	const numbers = isNumbers ? "0123456789" : "";
	const symbols = isSymbols ? "!@#$%^&*()_+" : "";

	const passwordCharacters =
		lowerCaseLetters + upperCaseLetters + numbers + symbols;

	let password = "";
	for (let i = 0; i < passwordLength; i++) {
		const characterIndex = Math.floor(
			Math.random() * passwordCharacters.length
		);
		password += passwordCharacters[characterIndex];
	}
	return password;
};

generateButton.addEventListener("click", function () {
	const upperCaseCheckEl = document.getElementById("uppercase");
	const numberCheckEL = document.getElementById("numbers");
	const symbolCheckEl = document.getElementById("symbols");

	isUpperCase = upperCaseCheckEl.checked;
	isNumbers = numberCheckEL.checked;
	isSymbols = symbolCheckEl.checked;

	const password = generatePassword(passwordLength);
	passwordEl.innerText = password;
	console.log(password);
});

passwordEl.addEventListener("click", (e) => {
	if (e.target.innerText.length > 0) {
		navigator.clipboard
			.writeText(passwordEl.innerText)
			.then(() => {
				Toastify({
					text: "Copied to clipboard.",
					duration: 3000,
					destination: "https://github.com/apvarun/toastify-js",
					newWindow: true,
					close: true,
					gravity: "top", // `top` or `bottom`
					position: "right", // `left`, `center` or `right`
					stopOnFocus: true, // Prevents dismissing of toast on hover
					style: {
						background: "linear-gradient(to right, #ffba0a, #ffde89)",
					},
					onClick: function () {}, // Callback after click
				}).showToast();
				// alert("Copied to clipboard");
			})
			.catch((err) => {
				Toastify({
					text: "could not copy",
					duration: 3000,
					destination: "https://github.com/apvarun/toastify-js",
					newWindow: true,
					close: true,
					gravity: "top", // `top` or `bottom`
					position: "right", // `left`, `center` or `right`
					stopOnFocus: true, // Prevents dismissing of toast on hover
					style: {
						background: "linear-gradient(to right, #FF0000, #FF0000)",
					},
					onClick: function () {}, // Callback after click
				}).showToast();
				// alert("could not copy");
			});
	}
});

// Event
passwordRangeInput.addEventListener("input", generatePasswordLength);
