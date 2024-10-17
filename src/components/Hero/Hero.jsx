import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="home_hero">
            <h1>100 JavaScript Projects</h1>
            <p>Explore a diverse range of 100 JavaScript Projects.</p>

            <Link
                to="https://github.com/pradipchaudhary/100-javascript-projects"
                target="_blank"
                className="btn"
            >
                View on GitHub
            </Link>
        </div>
    );
};

export default Hero;
