import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="home_hero">
            <div className="container">
                <div className="snippets">
                    <a
                        href="https://github.com/pradipchaudhary/100-js-projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        <span className="outer-span">
                            <span className="background-spin" />
                            <div className="button-content">
                                New snippets ⚡️
                                <span className="read-more">
                                    Read more
                                    <ArrowRight
                                        className="arrow-icon"
                                        size={16}
                                    />
                                </span>
                            </div>
                        </span>
                    </a>
                </div>

                <h1>
                    JavaScript mastery with
                    <span className="text-gradient">100 dynamic projects.</span>
                </h1>
                <p>
                    Explore a curated collection of 100 practical JavaScript
                    projects to sharpen your skills from beginner to advanced
                    levels.
                </p>

                <div className="hero-btn">
                    <Link
                        to="https://github.com/pradipchaudhary/100-js-projects"
                        target="_blank"
                        className=""
                    >
                        <button>
                            Go to GitHub{" "}
                            <ArrowRight
                                className="arrow-right-icon"
                                size={16}
                            />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
