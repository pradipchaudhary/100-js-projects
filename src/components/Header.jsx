import { Link } from "react-router-dom";
import Navbar from "./Navbar";

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
                    <Navbar />
                </div>
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
            </div>
        </header>
    );
};

export default Header;
