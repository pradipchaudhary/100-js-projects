// components/Error.js

// Component to display error and retry button
const Error = ({ errorMessage, onRetry }) => {
    return (
        <section>
            <div className="error-container container">
                <p>Error: {errorMessage}</p>
                <button onClick={onRetry}>Retry</button>
            </div>
        </section>
    );
};

export default Error;
