import { lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import SmoothScroll from "./components/ui/SmoothScroll";
import CursorGlow from "./components/ui/CursorGlow";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import CinematicBackground from "./components/ui/CinematicBackground";

// Lazy load below-the-fold sections for optimal performance & code splitting
const About = lazy(() => import("./components/sections/About"));
const Timeline = lazy(() => import("./components/sections/Timeline"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const AiLab = lazy(() => import("./components/sections/AiLab"));
const MoneyBusiness = lazy(() => import("./components/sections/MoneyBusiness"));
const Achievements = lazy(() => import("./components/sections/Achievements"));
const FutureGoals = lazy(() => import("./components/sections/FutureGoals"));
const Contact = lazy(() => import("./components/sections/Contact"));

function SectionFallback() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[300px]">
      <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-[#4DA3FF] animate-spin" />
    </div>
  );
}

export default function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="relative text-[#D8E6F5] min-h-screen selection:bg-[#4DA3FF]/30 selection:text-[#F0F7FF] overflow-x-hidden font-sans antialiased bg-[var(--theme-bg)] transition-colors duration-700">
          {/* Accessible skip link */}
          <a href="#main-content" className="sr-only focus:not-sr-only">
            Skip to main content
          </a>

          {/* Cinematic Background (Dynamic Mesh + Grid + Theme-adaptive particles) */}
          <CinematicBackground />

          {/* Soft Electric Ambient Cursor Glow */}
          <CursorGlow color="radial-gradient(circle 280px at center, rgba(255,255,255,0.04) 0%, transparent 80%)" />

          {/* Sticky Minimal Navigation Header with Theme Switcher */}
          <Navbar />

          {/* Page Sections */}
          <motion.main
            id="main-content"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
            className="relative z-10"
          >
            <div id="hero">
              <Hero />
            </div>

            <Suspense fallback={<SectionFallback />}>
              <div id="about">
                <About />
              </div>

              <div id="skills">
                <Skills />
              </div>

              <div id="projects">
                <Projects />
              </div>

              <div id="journey">
                <Timeline />
              </div>

              <div id="ailab">
                <AiLab />
              </div>

              <div id="business">
                <MoneyBusiness />
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
          </motion.main>
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
