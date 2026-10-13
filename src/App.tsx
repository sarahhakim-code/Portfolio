import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";

// Components
import { Loader } from "./components/Loader";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { QuoteBreak } from "./components/QuoteBreak";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-universe text-white selection:bg-neon-red selection:text-white">
        {/* Custom Glowing Cursor (Automatically hidden on touch devices) */}
        <CustomCursor />

        {/* 1. Full-Screen Loader Intro */}
        {loading && <Loader onComplete={() => setLoading(false)} />}

        {/* 2. Top Navigation Bar */}
        <Navbar />

        {/* Main Sections */}
        <main>
          {/* 3. Hero Section with Opposing Tilted Marquees */}
          <Hero />

          {/* 4. About Section with Comic Framed Photo */}
          <About />

          {/* 5. Skills Section with Pop-in Cards */}
          <Skills />

          {/* 6. Projects Section with 3D Tilt Cards */}
          <Projects />

          {/* 7. Achievements Timeline with Scroll Line */}
          <Achievements />

          {/* 8. Quote Break: "IT'S JUST A LEAP OF FAITH." */}
          <QuoteBreak />

          {/* 9. Contact Section with Interactive Form */}
          <Contact />
        </main>

        {/* 10. Footer with Second Marquee & Links */}
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default App;
