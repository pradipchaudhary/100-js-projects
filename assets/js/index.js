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
