// src/components/WhatYoullLearn.js
import "./WhatYouLearn.css";

const learnings = [
    {
        id: 1,
        title: "Core JavaScript",
        description:
            "Strengthen your understanding of ES6+ features, functions, objects, arrays, and control structures.",
        icon: "📜",
    },
    {
        id: 2,
        title: "DOM Manipulation",
        description:
            "Learn how to dynamically update web content, interact with users, and create engaging interfaces.",
        icon: "🌐",
    },
    {
        id: 3,
        title: "APIs and Asynchronous Programming",
        description:
            "Get comfortable working with APIs, handling fetch requests, and mastering async/await.",
        icon: "🔗",
    },
    {
        id: 4,
        title: "JavaScript Frameworks",
        description:
            "Explore how JavaScript integrates with popular libraries like React and Vue.js, preparing you for full-stack development.",
        icon: "⚛️",
    },
];

const WhatYouLearn = () => {
    return (
        <section className="learn" id="learn">
            <div className="container">
                <div className="learn-container">
                    <h1 className="section-title">What You&apos;ll Learn</h1>
                    <div className="learn-grid">
                        {learnings.map((learning) => (
                            <div key={learning.id} className="learn-card">
                                <div className="learn-icon">
                                    {learning.icon}
                                </div>
                                <div className="learn-info">
                                    <h2 className="learn-title">
                                        {learning.title}
                                    </h2>
                                    <p className="learn-description">
                                        {learning.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYouLearn;
