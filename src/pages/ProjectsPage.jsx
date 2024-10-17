// pages/ProjectPage.js
import { useEffect, useState, useMemo } from "react";
import Project from "../components/Project";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            setError(null); // Reset error before new request

            try {
                const response = await fetch("/api.json");

                if (!response.ok) {
                    throw new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                }

                const data = await response.json();
                setProjects(data.projects); // Save the projects data
            } catch (err) {
                setError(err.message);
                document.title = "Error loading projects";
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const renderedProjects = useMemo(() => {
        return projects.map((project) => (
            <Project project={project} key={project.id} /> // Use a unique ID
        ));
    }, [projects]);

    if (loading) {
        return (
            <Loading /> // Use a dedicated loading component
        );
    }

    if (error) {
        return (
            <Error
                errorMessage={error}
                onRetry={() => window.location.reload()}
            />
        );
    }

    return (
        <main id="content" className="main-content" role="main">
            <section className="project-section">
                <div className="container">
                    <h2 className="project-level">All Projects</h2>
                    <div className="projects">{renderedProjects}</div>
                </div>
            </section>
        </main>
    );
};

export default Projects;
