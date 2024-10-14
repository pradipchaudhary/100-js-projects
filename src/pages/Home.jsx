// pages/Home.js
import { useEffect, useState, useMemo } from "react";
import Error from "../components/Error";
import Hero from "../components/Hero";
import Project from "../components/Project";
import WhatYoullLearn from "../components/WhatYoullLearn";
import CommunitySection from "../components/CommunitySection";

const Home = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            setError(null); // Reset error before new request

            try {
                // Fetch data from the local api.json file in the public folder
                const response = await fetch("/api.json");

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const data = await response.json();
                setProjects(data); // Set the fetched data to projects state
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
        // Slice the projects array to only get the first 3 projects
        return projects
            .slice(0, 3)
            .map((project, index) => <Project project={project} key={index} />);
    }, [projects]);

    if (loading) {
        return (
            <section>
                <div className="container">
                    <div className="loading-container ">
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
            <Hero />
            <section className="category-section">
                <div className="container">
                    <h2 className="category-level">Top Projects </h2>
                    <div className="projects">{renderedProjects}</div>
                </div>
            </section>
            <WhatYoullLearn />
            <CommunitySection />
        </main>
    );
};

export default Home;
