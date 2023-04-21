let isOpen = true;
let dateOfBirth;
const settingIcon = document.getElementById("settingIcon");
const settingContent = document.getElementById("settingContent");
const dobButton = document.getElementById("dobButton");
const dobValue = document.getElementById("dobValue");

const initEle = document.getElementById("initEle");
const afterDobEle = document.getElementById("afterDobEle");

const settingToggle = () => {
	if (isOpen) {
		settingContent.classList.remove("hide");
	} else {
		settingContent.classList.add("hide");
	}
	isOpen = !isOpen;
	console.log(isOpen);
};

const setDobHandler = () => {
	dateOfBirth = dobValue.value;

	if (dateOfBirth) {
		initEle.classList.add("hide");
		afterDobEle.classList.remove("hide");
		console.log(initEle);
		console.log(afterDobEle);
		console.log("if set date : ", dateOfBirth);
	} else {
		afterDobEle.classList.add("hide");
		initEle.classList.remove("hide");
		console.log("hello");
		console.log("if Not set date : ", dateOfBirth);
	}
	// console.log(dateOfBirth);
};

setDobHandler();

settingIcon.addEventListener("click", settingToggle);
dobButton.addEventListener("click", setDobHandler);
