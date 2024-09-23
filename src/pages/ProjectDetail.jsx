import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
    const { id } = useParams(); // Get project ID from URL
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch("../../api.json");
                const result = await response.json();

                // Find the project by its ID from the fetched data
                const project = result.categories
                    .flatMap((category) => category.projects)
                    .find((proj) => proj.id === id);

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

        fetchProject();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="project-detail-container ">
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
    );
};

export default ProjectDetail;
