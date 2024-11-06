// src/components/CommunitySection.js
import { useEffect, useState } from "react";
import "./CommunitySection.css";
import { GitFork, Star } from "lucide-react";

const CommunitySection = () => {
    const [repoData, setRepoData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepoData = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/repos/pradipchaudhary/100-js-projects"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data from GitHub");
                }
                const data = await response.json();
                setRepoData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchRepoData();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <section>
            <div className="container">
                <div className="community-container">
                    <h1 className="community-title">Join Our Community</h1>
                    <p className="community-description">
                        Explore our GitHub repository with over{" "}
                        <a href="">100 hands-on JavaScript projects</a> to
                        enhance your development skills. Star or fork our
                        repository to contribute!
                    </p>

                    <div className="community-stats">
                        <div className="stat-box">
                            <div className="stat-icon">🚀</div>
                            <h2 className="stat-number">100+</h2>
                            <p className="stat-text">Projects</p>
                            <button className="community-button">
                                <a
                                    href="https://github.com/pradipchaudhary/100-js-projects"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Contribute
                                </a>
                            </button>
                        </div>

                        <div className="stat-box">
                            <div className="stat-icon">
                                <Star />
                            </div>
                            <h2 className="stat-number">
                                {repoData.stargazers_count}
                            </h2>
                            <p className="stat-text">GitHub Stars</p>
                            <button className="community-button">
                                <a
                                    href="https://github.com/pradipchaudhary/100-js-projects/stargazers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Star Us
                                </a>
                            </button>
                        </div>

                        <div className="stat-box">
                            <div className="stat-icon">
                                <GitFork />
                            </div>
                            <h2 className="stat-number">
                                {repoData.forks_count}
                            </h2>
                            <p className="stat-text">GitHub Forks</p>
                            <button className="community-button">
                                <a
                                    href="https://github.com/pradipchaudhary/100-js-projects/fork"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Fork This Repo
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
