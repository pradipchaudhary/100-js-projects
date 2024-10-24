// pages/Home.js
import Hero from "../components/Hero/Hero";
import WhatYouLearn from "../components/WhatYouLearn/WhatYouLearn";
import CommunitySection from "../components/CommunitySection/CommunitySection";
import ProjectList from "../components/ProjectList/ProjectList";

const Home = () => {
    return (
        <main id="content" className="main-content" role="main">
            <Hero />
            <ProjectList />
            <WhatYouLearn />
            <CommunitySection />
        </main>
    );
};

export default Home;
