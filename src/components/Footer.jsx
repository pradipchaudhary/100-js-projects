// Import Images
import CodeImg from "../assets/images/code.png";

const Footer = () => {
    return (
        <footer>
            <div className="container footer">
                <img src={CodeImg} alt="Code Icon" width="30px" />
                &nbsp; with&nbsp; <span className="heart-icon">❤</span>&nbsp;
                by&nbsp;
                <a
                    href="http://pradipchaudhary.com.np/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Pradip Chaudhary
                </a>
            </div>
        </footer>
    );
};

export default Footer;
