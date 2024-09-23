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
                const categories = result.categories;

                // Find the project by its ID from the fetched data
                const project = categories
                    .flatMap((category) => category.projects) // Flatten the array to access all projects
                    .find((proj) => proj.id === parseInt(id)); // Ensure ID comparison is correct

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
