let isOpen = true;
let dateOfBirth;
const settingIcon = document.getElementById("settingIcon");
const settingContent = document.getElementById("settingContent");
const dobButton = document.getElementById("dobButton");
const dobInputValue = document.getElementById("dobValue");
const dobV = dobInputValue.value;
console.log("DOB Value is : ", dobV);

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

// Update Ages
const updateAge = () => {
	const currentDate = new Date();
	const dateDifferent = currentDate - dateOfBirth;
	// Year, month, day, hour , minute, second
	const year = Math.floor(dateDifferent / (1000 * 60 * 60 * 24 * 365));

	// set date in dom
	yearEl.innerHTML = year;
	console.log("Year Value : ", year);
};

const setDobHandler = () => {
	const stringDate = dobInputValue.value;
	dateOfBirth = stringDate ? new Date(stringDate) : null;

	if (dateOfBirth) {
		initEle.classList.add("hide");
		afterDobEle.classList.remove("hide");
		updateAge();
	} else {
		initEle.classList.remove("hide");
		afterDobEle.classList.add("hide");
	}
};

// setDobHandler();

settingIcon.addEventListener("click", settingToggle);
dobButton.addEventListener("click", setDobHandler);
