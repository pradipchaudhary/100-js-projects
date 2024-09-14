"use strict";
// const list = document.querySelector(".projects-list");
// const projectsItems = document.getElementById("projects-items");

const beginnerLevel = document.getElementById("beginner-level");

// Pre-loading
window.onload = function () {
    console.log("Loaded");
};

console.log(beginnerLevel);

const allProjects = async () => {
    try {
        const res = await fetch("/api.json");
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        return data; // Return the data here
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error if needed
    }
};

// Example usage:
allProjects().then((data) => {
    console.log("Data received:", data.categories);
});

// console.log(getProjects());

// function beginnerLevelProject() {
//     const allPro = getProjects();
//     console.log(allPro);
// }

// beginnerLevelProject();

// fetch("./projects.json")
//     .then((res) => res.json())
//     .then((data) => updateUI(data));

//  UpdateUI
// const updateUI = (projects) => {
//     projects.map(({ name, code, index }) => {
//         const itemList = document.createElement("li");
//         itemList.innerHTML = `
// 		<span class="project-number">${index}</span>
// 		<span class="project-name">
//         <a href="/${index}-${name}/index.html" target="_blank" >
// 		    ${projectNameFormatter(name)}
// 		</a>
//         </span>
// 		<a href="${code}" target="_blank" class="code-link">
// 		    ${"{"} code ${"}"}
// 		</a>
// 		`;
//         list.appendChild(itemList);
//     });
// };

// Project Name Formatter
const projectNameFormatter = (name) => {
    return name
        .split("-")
        .map((word) => word[0] + word.slice(1))
        .join(" ");
};
