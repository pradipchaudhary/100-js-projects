// Loading counter logic
let count = 0;
const loadingCount = document.getElementById("loading-count");
const loader = document.getElementById("loader");
const content = document.querySelector(".content");

function updateLoadingCount() {
    count++;
    loadingCount.innerText = count;

    if (count < 100) {
        setTimeout(updateLoadingCount, 20); // Speed of counting
    } else {
        // Hide the loading count after it reaches 100%
        setTimeout(() => {
            loadingCount.style.opacity = 0; // Fade out the count
        }, 300); // Wait 300ms for a smoother transition

        // Trigger background split after loading count reaches 100
        triggerBackgroundSplit();
    }
}

// Function to trigger background split animation
function triggerBackgroundSplit() {
    loader.classList.add("split-bg");

    // After the split animation, hide the loader and show the content
    setTimeout(() => {
        loader.classList.add("hidden");
        content.classList.add("visible"); // Show the content only after split
    }, 2000); // Wait for the split animation to complete (2s)
}

// Start loading count
updateLoadingCount();

async function fetchProjects() {
    try {
        const response = await fetch("../../api.json"); // Adjust the path as needed
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        displayProjects(data);
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
}

fetchProjects();

function displayProjects(data) {
    const container = document.getElementById("beginner-level"); // Ensure this ID exists in your HTML
    // console.log("Categories:", data.categories);
    data.categories.forEach((category) => {
        // Create a section for each category
        const section = document.createElement("section");
        section.classList.add("category-section");

        // Create a header for the category
        const header = document.createElement("h2");
        header.textContent = category.level;
        header.classList.add("category-level");
        section.appendChild(header);

        // Create a list for the projects
        const projectList = document.createElement("ul");

        category.projects.forEach((project) => {
            // Create a list item for each project
            const listItem = document.createElement("li");

            // Add project details
            listItem.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <p><strong>Difficulty:</strong> ${project.difficulty}</p>
                <p><strong>Tech Used:</strong> ${project.tech_used.join(
                    ", "
                )}</p>
                <p><strong>Estimated Time:</strong> ${
                    project.estimated_time
                }</p>
            `;

            projectList.appendChild(listItem);
        });

        section.appendChild(projectList);
        container.appendChild(section);
    });
}

displayProjects();
