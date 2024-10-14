// src/components/CommunitySection.js
import { useEffect, useState } from "react";
import "./CommunitySection.css";

const CommunitySection = () => {
    const [repoData, setRepoData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visitorCount, setVisitorCount] = useState(0); // Visitor count state

    useEffect(() => {
        // Fetch repository data from GitHub API
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
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <section>
            <div className="container">
                <div className="community-container">
                    <h1 className="community-title">Join the Community</h1>
                    <p className="community-description">
                        Our GitHub repository features 100 hands-on JavaScript
                        projects to help developers level up their skills. Star
                        the repo, contribute, or fork it for your own use!
                    </p>

                    <div className="community-stats">
                        <div className="stat-box">
                            <h2 className="stat-number">100+</h2>
                            <p className="stat-text"> Projects</p>
                        </div>

                        <div className="stat-box">
                            <h2 className="stat-number">
                                {" "}
                                {repoData.stargazers_count}
                            </h2>
                            <p className="stat-text">GitHub Stars</p>
                            <button className="community-button">
                                <a
                                    href="https://github.com/pradipchaudhary/100-js-projects/stargazers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Star us on GitHub
                                </a>
                            </button>
                            <p className="small-text">
                                Help us grow our community
                            </p>
                        </div>

                        <div className="stat-box">
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
                                    Fork this Repo
                                </a>
                            </button>
                            <p className="small-text">Start your own version</p>
                        </div>

                        <div className="stat-box">
                            <h2 className="stat-number">500+</h2>
                            <p className="stat-text">Contributors</p>
                            <button className="community-button">
                                <a
                                    href="https://github.com/pradipchaudhary/100-js-projects/graphs/contributors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Join as a Contributor
                                </a>
                            </button>
                            <p className="small-text">Commit your projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
