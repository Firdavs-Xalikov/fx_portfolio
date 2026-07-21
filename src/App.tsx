import { motion, useReducedMotion } from "framer-motion";
import CursorGlow from "./components/ui/CursorGlow";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Timeline from "./components/sections/Timeline";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import FutureGoals from "./components/sections/FutureGoals";
import Contact from "./components/sections/Contact";

export default function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
      className="relative bg-black min-h-screen selection:bg-blue-500/20 selection:text-blue-300 overflow-hidden font-sans antialiased"
    >
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
      </main>
    </motion.div>
  );
}
