let isOpen = true;
let dateOfBirth;
const settingIcon = document.getElementById("settingIcon");
const settingContent = document.getElementById("settingContent");
const dobButton = document.getElementById("dobButton");
const dobValue = document.getElementById("dobValue");

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
	console.log(dateOfBirth);
};

settingIcon.addEventListener("click", settingToggle);
dobButton.addEventListener("click", setDobHandler);
