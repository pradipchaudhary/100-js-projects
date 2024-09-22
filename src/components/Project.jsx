// src/Project.js

const Project = ({ project }) => {
    return (
        <div className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
                <strong>Tech used:</strong> {project.tech_used.join(", ")}
            </p>
            <p>
                <strong>Estimated time:</strong> {project.estimated_time}
            </p>
        </div>
    );
};

export default Project;
