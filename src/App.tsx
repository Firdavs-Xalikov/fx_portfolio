import { lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Ambient3D from "./components/ui/Ambient3D";
import CursorGlow from "./components/ui/CursorGlow";
import Navbar from "./components/ui/Navbar";
import LaneLine from "./components/ui/LaneLine";
import GrainOverlay from "./components/ui/GrainOverlay";
import Hero from "./components/sections/Hero";

// Lazy load below-the-fold sections for optimal code-splitting & performance
const About = lazy(() => import("./components/sections/About"));
const Timeline = lazy(() => import("./components/sections/Timeline"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Achievements = lazy(() => import("./components/sections/Achievements"));
const FutureGoals = lazy(() => import("./components/sections/FutureGoals"));
const Contact = lazy(() => import("./components/sections/Contact"));

function SectionFallback() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[300px]">
      <div className="w-8 h-8 rounded-full border-2 border-[#2FAF83]/20 border-t-[#2FAF83] animate-spin" />
    </div>
  );
}

export default function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
      className="relative text-[#F5F1E8] min-h-screen selection:bg-[#2FAF83]/30 selection:text-[#F5F1E8] overflow-x-hidden font-sans antialiased"
    >
      {/* Accessible skip link */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      {/* Subtle Three.js 3D Ambient Particle Layer */}
      <Ambient3D />

      {/* Tactile 3.5% SVG Noise Texture Overlay */}
      <GrainOverlay />

      {/* Signature Jewel Emerald Lane Line progress marker */}
      <LaneLine />

      {/* Re-themed Jewel Emerald / Gold Cursor Glow */}
      <CursorGlow />

      {/* Sticky minimalist navigation header */}
      <Navbar />

      {/* Page Sections */}
      <main id="main-content" className="relative z-10 lg:pl-16">
        <div id="hero">
          <Hero />
        </div>
        
        <Suspense fallback={<SectionFallback />}>
          <div id="about">
            <About />
          </div>
          
          <div id="journey">
            <Timeline />
          </div>
          
          <div id="skills">
            <Skills />
          </div>
          
          <div id="projects">
            <Projects />
          </div>
          
          <div id="achievements">
            <Achievements />
          </div>
          
          <div id="goals">
            <FutureGoals />
          </div>
          
          <div id="contact">
            <Contact />
          </div>
        </Suspense>
      </main>
    </motion.div>
  );
}
