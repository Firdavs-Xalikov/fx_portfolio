import { lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import CursorGlow from "./components/ui/CursorGlow";
import Navbar from "./components/ui/Navbar";
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
    <div className="py-24 px-6 max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[300px]">
      <div className="w-12 h-12 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
    </div>
  );
}

export default function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
      className="relative bg-black min-h-screen selection:bg-blue-500/20 selection:text-blue-300 overflow-hidden font-sans antialiased"
    >
      {/* Accessible skip link */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      {/* Interactive cursor follower background glow */}
      <CursorGlow />

      {/* Grid overlay mesh background */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none z-0" />

      {/* Sticky glass-blur navigation header */}
      <Navbar />

      {/* Page Sections */}
      <main id="main-content" className="relative z-10">
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
