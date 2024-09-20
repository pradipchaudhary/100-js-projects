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

document.addEventListener("DOMContentLoaded", function () {
    let counter = 1;
    const counterElement = document.getElementById("counter");
    const loadingSection = document.getElementById("loading-section");
    const pageContent = document.getElementById("page-content");

    // Create the counter animation
    const interval = setInterval(() => {
        counterElement.innerText = counter;

        if (counter >= 100) {
            clearInterval(interval); // Stop the counter when it reaches 100
            loadingSection.style.opacity = 0; // Fade out the loading section

            setTimeout(() => {
                loadingSection.style.display = "none"; // Remove the loading section
                pageContent.classList.remove("hidden"); // Show the page content

                // Add class to trigger the fade-in and slide-up animation
                document.body.classList.add("page-loaded");
            }, 500); // Wait for the fade-out animation to complete
        }

        counter++;
    }, 30); // Adjust this interval for faster or slower counting
});
