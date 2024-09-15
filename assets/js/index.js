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
