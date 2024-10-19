// components/Loading.js
import "./Loading.css"; // Create a separate CSS file for loading styles

const Loading = () => {
    return (
        <section className="loading-section">
            <div className="loading-container">
                <p className="loading-text">Loading...</p>
            </div>
        </section>
    );
};

export default Loading;
