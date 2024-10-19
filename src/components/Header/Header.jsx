import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Logo from "../../assets/images/100.png";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <h1 className="logo">
                        {/* <Link to="/" rel="noreferrer">
                            <span>1</span>
                            <span>0</span>
                            <span>0</span>
                        </Link> */}
                        <Link className="">
                            <img src={Logo} alt="Logo," width={60} />
                        </Link>
                    </h1>
                    <Navbar />
                </div>
            </div>
        </header>
    );
};

export default Header;
