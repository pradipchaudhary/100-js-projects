let isOpen = true;
const settingIcon = document.getElementById("settingIcon");
const settingContent = document.getElementById("settingContent");

const settingToggle = () => {
	if (isOpen) {
		settingContent.classList.remove("hide");
	} else {
		settingContent.classList.add("hide");
	}
	isOpen = !isOpen;
	console.log(isOpen);
};

settingIcon.addEventListener("click", function () {
	settingToggle();
});
