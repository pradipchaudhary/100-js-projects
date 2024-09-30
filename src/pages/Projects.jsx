// pages/ProjectPage.js
import { useEffect, useState, useMemo } from "react";
import Error from "../components/Error";
import Project from "../components/Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            setError(null); // Reset error before new request

            try {
                const response = await fetch(
                    "https://one00jsprojects-t2pk.onrender.com/api/project"
                );

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                const data = await response.json();
                setProjects(data); // Save the projects data
                setLoading(false);
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
        return projects.map((project, index) => (
            <Project project={project} key={index} />
        ));
    }, [projects]);

    if (loading) {
        return (
            <section>
                <div className="container">
                    <div className="loading-container">
                        <p>Loading...</p>
                    </div>
                </div>
            </section>
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
