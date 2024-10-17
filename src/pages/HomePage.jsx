// pages/Home.js
import Hero from "../components/Hero/Hero";
import WhatYouLearn from "../components/WhatYouLearn/WhatYouLearn";
import CommunitySection from "../components/CommunitySection/CommunitySection";

const Home = () => {
    return (
        <main id="content" className="main-content" role="main">
            <Hero />
            {/* <section className="category-section">
                <div className="container">
                    <h2 className="category-level">Top Projects </h2>
                </div>
            </section> */}
            <WhatYouLearn />
            <CommunitySection />
        </main>
    );
};

export default Home;
