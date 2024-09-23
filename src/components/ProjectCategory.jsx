// components/ProjectCategory.js

import { Link } from "react-router-dom";

// Component to render each project category
const ProjectCategory = ({ category }) => {
    return (
        <section className="category-section">
            <div className="container">
                <h2 className="category-level">{category?.level} </h2>
                <div className="projects">
                    {category?.projects.map((item, i) => (
                        <div className="project-item" key={i}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>
                                <strong>Difficulty:</strong> {item.difficulty}
                            </p>
                            <p>
                                <strong>Tech Used:</strong>{" "}
                                {item.tech_used.join(", ")}
                            </p>
                            <p>
                                <strong>Estimated Time:</strong>{" "}
                                {item.estimated_time}
                            </p>
                            <br />
                            {/* Link to project detail page */}
                            <Link
                                to={`/projects/${item.name}`}
                                className="detail-link"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCategory;
