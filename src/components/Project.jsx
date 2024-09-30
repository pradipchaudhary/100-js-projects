// src/Project.js

import { RiLineChartLine, RiTimer2Line, RiToolsFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import truncateString from "../utils/truncateString";
const Project = ({ project }) => {
    console.log("Project: ", project);
    return (
        <div className="project-item">
            <div className="thumbnail"></div>
            <Link to={`/projects/${project._id}`}>
                <h3>{project.name}</h3>
            </Link>
            <p>{truncateString(project.description, 48)}</p>
            <p className="sm-font">
                <strong>
                    <RiLineChartLine size={15} />
                </strong>
                {project.difficulty}
            </p>
            <p className="sm-font">
                <strong>
                    <RiToolsFill size={15} />
                </strong>
                {truncateString(project.tech_used.join(", "), 30)}
            </p>
            <p className="sm-font">
                <strong>
                    <RiTimer2Line size={15} />
                </strong>
                {project.estimated_time}
            </p>
            <br />
            {/* <Link to={`/projects/${project._id}`} className="detail-link">
                View Details
            </Link> */}
        </div>
    );
};

export default Project;
