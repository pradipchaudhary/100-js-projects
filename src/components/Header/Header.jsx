import { Link } from "react-router-dom";
import "./Header.css";
import { Github } from "lucide-react";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <h1 className="logo">
                        <Link to="/" rel="noreferrer">
                            <span>1</span>
                            <span>0</span>
                            <span>0</span>
                        </Link>
                    </h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            {/* <li>
                                <Link
                                    to="https://www.buymeacoffee.com/pradipchaudhary"
                                    target="_blank"
                                    rel="noreferrer"
                                    className=""
                                >
                                    <Coffee />
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    to="https://github.com/pradipchaudhary/100-js-projects"
                                    target="_blank"
                                    rel="noreferrer"
                                    className=""
                                >
                                    <Github />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
