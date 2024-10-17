import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link
                        to="https://www.buymeacoffee.com/pradipchaudhary"
                        target="_blank"
                        rel="noreferrer"
                        className="buy-coffee-button"
                    >
                        Buy me a coffee
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
