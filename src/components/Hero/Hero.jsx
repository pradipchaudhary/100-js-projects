import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="home_hero">
            <div className="container">
                <h1>
                    Boost your JavaScript mastery with 100 dynamic projects.
                </h1>
                <p>
                    Explore a curated collection of 100 practical JavaScript
                    projects to sharpen your skills from beginner to advanced
                    levels.
                </p>

                <div className="hero-btn">
                    <Link
                        to="https://github.com/pradipchaudhary/100-javascript-projects"
                        target="_blank"
                        className=""
                    >
                        <button>
                            Go to GitHub <ArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
