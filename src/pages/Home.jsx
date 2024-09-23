// pages/Home.js
import { useEffect, useState, useMemo } from "react";
import ProjectCategory from "../components/ProjectCategory";
import Error from "../components/Error";

const Home = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            setError(null); // Reset error before new request

            try {
                const response = await fetch("../../api.json");
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                const data = await response.json();
                setProjects(data?.categories || []); // Safe access with optional chaining
                document.title = "Projects Loaded";
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
        return projects.map((category, index) => (
            <ProjectCategory category={category} key={index} />
        ));
    }, [projects]);

    if (loading) {
        return (
            <div className="loading-container">
                <p>Loading...</p>
            </div>
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
            {renderedProjects}
        </main>
    );
};

export default Home;
