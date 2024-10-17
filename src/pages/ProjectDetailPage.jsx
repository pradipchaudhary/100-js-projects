// src/components/ProjectDetail.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css"; // Import the CSS file for styling

const ProjectDetail = () => {
    const { id } = useParams(); // Get project ID from URL
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProject = async () => {
        try {
            const response = await fetch("/api.json"); // Fetch from your local API JSON
            const data = await response.json();

            console.log(data);
            // Use the id to find the project
            const foundProject = data.find((proj) => proj.index === id);

            if (!foundProject) {
                throw new Error("Project not found");
            }

            setProject(foundProject);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProject();
    }, [id]);

    if (loading)
        return (
            <div className="loading-container">
                <p className="loading-text">Loading...</p>
            </div>
        );

    if (error)
        return (
            <div className="error-container">
                <p className="error-text">Error: {error}</p>
            </div>
        );

    return (
        <section className="project-detail-section">
            <div className="project-detail-container">
                <h2 className="project-title">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-info">
                    <p>
                        <strong>Difficulty:</strong> {project.difficulty}
                    </p>
                    <p>
                        <strong>Tech Used:</strong>{" "}
                        {project.techUsed.join(", ")}{" "}
                        {/* Fixed property name */}
                    </p>
                    <p>
                        <strong>Estimated Time:</strong> {project.estimatedTime}{" "}
                        {/* Fixed property name */}
                    </p>
                    <p>
                        <strong>Status:</strong> {project.status}
                    </p>
                    <p>
                        <strong>Start Date:</strong>{" "}
                        {new Date(project.startDate).toLocaleDateString()}
                    </p>
                    <p>
                        <strong>End Date:</strong>{" "}
                        {new Date(project.endDate).toLocaleDateString()}
                    </p>
                    <p>
                        <strong>Created At:</strong>{" "}
                        {new Date(project.createdAt).toLocaleDateString()}
                    </p>
                </div>

                <div className="project-links">
                    <p>
                        <strong>Code Link:</strong>{" "}
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Code
                        </a>
                    </p>
                    <p>
                        <strong>Live Demo Link:</strong>{" "}
                        <a
                            href={project.liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live Demo
                        </a>
                    </p>
                </div>

                <div className="project-tags">
                    <strong>Tags:</strong> {project.tags.join(", ")}
                </div>

                {/* Additional project details can go here */}
            </div>
        </section>
    );
};

export default ProjectDetail;
