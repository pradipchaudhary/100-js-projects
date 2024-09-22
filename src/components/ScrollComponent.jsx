import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollComponent = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => t, // You can customize easing here
            smooth: true,
        });

        const update = (time) => {
            lenis.raf(time);
            requestAnimationFrame(update);
        };

        requestAnimationFrame(update);

        return () => {
            // Clean up on unmount
            lenis.destroy();
        };
    }, []);

    return null; // This component does not render anything
};

export default ScrollComponent;
