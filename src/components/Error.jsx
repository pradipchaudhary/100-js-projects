// components/Error.js

// Component to display error and retry button
const Error = ({ errorMessage, onRetry }) => {
    return (
        <div className="error-container">
            <p>Error: {errorMessage}</p>
            <button onClick={onRetry}>Retry</button>
        </div>
    );
};

export default Error;
