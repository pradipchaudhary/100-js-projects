import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
    const { id } = useParams(); // Get project ID from URL
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchProject = async () => {
        try {
            const response = await fetch(
                `https://one00jsprojects-t2pk.onrender.com/api/project/${id}`
            );
            const project = await response.json();
            console.log("data: ", project);

            if (!project) {
                throw new Error("Project not found");
            }

            setProject(project);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProject();
    }, [project, id]);

    if (loading)
        return (
            <div className="container">
                <p>Loading...</p>
            </div>
        );
    if (error)
        return (
            <div className="container">
                <p>Error: {error}</p>
            </div>
        );

    return (
        <section className="container">
            <div className="project-detail-container">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p>
                    <strong>Difficulty:</strong> {project.difficulty}
                </p>
                <p>
                    <strong>Tech Used:</strong> {project.tech_used.join(", ")}
                </p>
                <p>
                    <strong>Estimated Time:</strong> {project.estimated_time}
                </p>

                {/* Additional project details can go here */}
            </div>
        </section>
    );
};

export default ProjectDetail;
