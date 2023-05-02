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
				alert("Copied to clipboard");
			})
			.catch((err) => {
				alert("could not copy");
			});
	}
});

// Event
passwordRangeInput.addEventListener("input", generatePasswordLength);
