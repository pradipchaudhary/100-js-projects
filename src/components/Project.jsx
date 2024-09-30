// src/Project.js

import { Link } from "react-router-dom";

const Project = ({ project }) => {
    return (
        <div className="category-section">
            <div className="projects">
                <div className="project-item">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>
                        <strong>Lavel:</strong> {project.difficulty}
                    </p>
                    <p>
                        <strong>Tech:</strong> {project.tech_used.join(", ")}
                    </p>
                    <p>
                        <strong>Time:</strong> {project.estimated_time}
                    </p>
                    <br />
                    <Link
                        to={`/projects/${project._id}`}
                        className="detail-link"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;
