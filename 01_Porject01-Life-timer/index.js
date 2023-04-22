let isOpen = true;
let dateOfBirth;
const settingIcon = document.getElementById("settingIcon");
const settingContent = document.getElementById("settingContent");
const dobButton = document.getElementById("dobButton");
const dobInputValue = document.getElementById("dobValue");
const initEle = document.getElementById("initEle");
const afterDobEle = document.getElementById("afterDobEle");

// Select Days Elements
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

// Setting Toggles Function
const settingToggle = () => {
	if (isOpen) {
		settingContent.classList.remove("hide");
	} else {
		settingContent.classList.add("hide");
	}
	isOpen = !isOpen;
	console.log(isOpen);
};

// Make two digits number
const makeTwoDigitsNumber = (number) => {
	return number > 9 ? number : `0${number}`;
};

// Update Ages
const updateAge = () => {
	const currentDate = new Date();
	const dateDifferent = currentDate - dateOfBirth;
	// Year, month, day, hour , minute, second
	const year = Math.floor(dateDifferent / (1000 * 60 * 60 * 24 * 365));
	const month = Math.floor((dateDifferent / (1000 * 60 * 60 * 24 * 365)) % 12);
	const day = Math.floor(dateDifferent / (1000 * 60 * 60 * 24)) % 30;
	const hour = Math.floor(dateDifferent / (1000 * 60 * 60)) % 24;
	const minute = Math.floor(dateDifferent / (1000 * 60)) % 60;
	const second = Math.floor(dateDifferent / 1000) % 60;

	// set date in dom
	yearEl.innerHTML = makeTwoDigitsNumber(year);
	monthEl.innerHTML = makeTwoDigitsNumber(month);
	dayEl.innerHTML = makeTwoDigitsNumber(day);
	hourEl.innerHTML = makeTwoDigitsNumber(hour);
	minuteEl.innerHTML = makeTwoDigitsNumber(minute);
	secondEl.innerHTML = makeTwoDigitsNumber(second);
};

const setDobHandler = () => {
	const stringDate = dobInputValue.value;
	dateOfBirth = stringDate ? new Date(stringDate) : null;

	//get local storage values
	const year = localStorage.getItem("year");
	const month = localStorage.getItem("month");
	const day = localStorage.getItem("day");

	// console.log("Value by local storage: ");
	if (year && month && day) {
		dateOfBirth = new Date(year, month, day);
	}

	if (dateOfBirth) {
		// Set time in localStorage
		localStorage.setItem("year", dateOfBirth.getFullYear());
		localStorage.setItem("month", dateOfBirth.getMonth());
		localStorage.setItem("day", dateOfBirth.getDate());

		initEle.classList.add("hide");
		afterDobEle.classList.remove("hide");
		setInterval(() => {
			updateAge();
		}, 1000);
	} else {
		initEle.classList.remove("hide");
		afterDobEle.classList.add("hide");
	}
};

setDobHandler();

settingIcon.addEventListener("click", settingToggle);
dobButton.addEventListener("click", setDobHandler);
