const list = document.querySelector(".list");

fetch("./projects.json")
	.then((res) => res.json())
	.then((data) => updateUI(data));

// Const UpdateUI
const updateUI = (projects) => {
	projects.map(({ name, code, index }) => {
		// console.log(name);
		const itemList = document.createElement("li");
		itemList.innerHTML = `
		<span class="project-number">${index}</span>
		<a href="/${name}/index.html" class="project-name">
		    ${projectNameFormatter(name)}
		</a>
		<a href="${code}" target="_blank" class="container-links">
		    Code
		</a>
		`;
		list.appendChild(itemList);
	});
};

// Project Name Formatter

const projectNameFormatter = (name) => {
	return name
		.split("-")
		.map((word) => word[0] + word.slice(1))
		.join(" ");
};
