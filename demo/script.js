document.addEventListener("DOMContentLoaded", () => {
    // Fetch data or assets
    fetchData().then(() => {
        document.body.classList.add("page-loaded");
        setTimeout(() => {
            const loadingSection = document.getElementById("loading-section");
            loadingSection.classList.add("hidden");
        }, 1500);
    });
});

function fetchData() {
    // Replace with actual data fetching logic
    return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
            resolve();
        }, 3000); // Adjust based on expected loading time
    });
}
