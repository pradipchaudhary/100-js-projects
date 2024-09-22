import { useEffect, useState } from "react";

const Home = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("../../api.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                console.log(result.categories);
                setProjects(result.categories);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main id="content" className="main-content" role="main">
            {projects.map((category, index) => (
                <section className="category-section" key={index}>
                    <div className="container">
                        <h2 className="category-level">{category.level}</h2>
                        <div className="projects">
                            {category.projects.map((item, i) => (
                                // This needs to return a JSX element for rendering
                                <div className="project-item" key={i}>
                                    <>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                        <p>
                                            <strong>Difficulty:</strong> $
                                            {item.difficulty}
                                        </p>
                                        <p>
                                            <strong>Tech Used:</strong> $
                                            {item.tech_used.join(", ")}
                                        </p>
                                        <p>
                                            <strong>Estimated Time:</strong> $
                                            {item.estimated_time}
                                        </p>
                                    </>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </main>
    );
};

export default Home;
