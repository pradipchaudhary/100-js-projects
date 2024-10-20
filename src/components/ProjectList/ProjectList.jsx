import React, { useState, useEffect } from "react";
import "./ProjectList.css"; // For styling

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    // Fetch JSON data from the public folder
    useEffect(() => {
        fetch("/api.json")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="project-container">
            <h1 className="project-title">100 JavaScript Projects</h1>
            <div className="project-list">
                {projects.map((project) => (
                    <div className="project-card" key={project.index}>
                        <img
                            src={project.thumbnail}
                            alt={project.name}
                            className="project-thumbnail"
                        />
                        <div className="project-content">
                            <h2 className="project-name">{project.name}</h2>
                            <p className="project-description">
                                {project.description}
                            </p>
                            <p className="project-difficulty">
                                Difficulty: {project.difficulty}
                            </p>
                            <p className="project-tech">
                                Tech Used: {project.techUsed.join(", ")}
                            </p>
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Code
                            </a>
                            <a
                                href={project.liveDemoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link live"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
