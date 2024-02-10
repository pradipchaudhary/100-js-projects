// Mockup data (replace with actual social media data)
const engagementData = [120, 180, 220, 160, 200, 240, 200];
const recentPosts = [
    { id: 1, text: "Lorem ipsum dolor sit amet.", likes: 20, comments: 5 },
    { id: 2, text: "Consectetur adipiscing elit.", likes: 15, comments: 3 },
    {
        id: 3,
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        likes: 30,
        comments: 8,
    },
    // Add more posts as needed
];

// Function to update engagement chart
function updateEngagementChart() {
    const ctx = document.getElementById("engagementChart").getContext("2d");

    // Clear previous chart
    if (window.engagementChart) {
        window.engagementChart.destroy();
    }

    // Create new chart
    window.engagementChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: recentPosts.map((post) => "Post " + post.id),
            datasets: [
                {
                    label: "Engagement",
                    data: engagementData,
                    borderColor: "#2196F3",
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    beginAtZero: true,
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: "Engagement Overview",
                },
                legend: {
                    display: true,
                    position: "bottom",
                },
            },
        },
    });
}

// Function to update recent posts list
function updateRecentPostsList() {
    const postsList = document.getElementById("postsList");
    postsList.innerHTML = "";

    recentPosts.forEach((post) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>Post ${post.id}</strong>: ${post.text}<br>Likes: ${post.likes}, Comments: ${post.comments}`;
        postsList.appendChild(li);
    });
}

// Initial load
updateEngagementChart();
updateRecentPostsList();
