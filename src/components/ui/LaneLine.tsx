import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "01 · HERO" },
  { id: "about", label: "02 · ABOUT" },
  { id: "journey", label: "03 · JOURNEY" },
  { id: "skills", label: "04 · SKILLS" },
  { id: "projects", label: "05 · PROJECTS" },
  { id: "achievements", label: "06 · CREDENTIALS" },
  { id: "goals", label: "07 · VISION" },
  { id: "contact", label: "08 · CONTACT" },
];

export default function LaneLine() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollPercent(Math.min(100, Math.max(0, currentProgress)));
      }

      // Check active section
      const scrollPosition = window.scrollY + 250;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Lane Line Spine & Turn Markers */}
      <div
        className="fixed left-4 md:left-8 top-0 bottom-0 z-30 hidden lg:block pointer-events-none"
        aria-hidden="true"
      >
        {/* Background Track Rule in Hairline (#1B2130) */}
        <div className="absolute top-0 bottom-0 left-[7px] w-[1px] bg-[#1B2130]" />

        {/* Active Emerald Fill Line (#2E8B74) with soft low-opacity glow */}
        <div
          className="absolute top-0 left-[6.5px] w-[2px] bg-[#2E8B74]"
          style={{
            height: `${scrollPercent}%`,
            boxShadow: shouldReduceMotion ? "none" : "0 0 8px rgba(46, 139, 116, 0.4)",
            transition: shouldReduceMotion ? "none" : "height 0.1s linear",
          }}
        />

        {/* Section Turn Markers */}
        <div className="absolute inset-y-0 left-0 w-max flex flex-col justify-between py-24 pointer-events-auto">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                aria-label={`Jump to ${sec.label}`}
                className="group flex items-center gap-3 py-1 cursor-pointer focus:outline-none"
              >
                {/* Tick Mark */}
                <div
                  className={`h-[2px] transition-all duration-300 ${
                    isActive
                      ? "w-4 bg-[#2E8B74] shadow-[0_0_6px_rgba(46,139,116,0.5)]"
                      : "w-2 bg-[#8B92A0] group-hover:w-3 group-hover:bg-[#EDEDE7]"
                  }`}
                />
                
                {/* Mono Section Label */}
                <span
                  className={`font-mono text-[11px] tracking-wider transition-all duration-200 ${
                    isActive
                      ? "text-[#2E8B74] font-semibold opacity-100 translate-x-0"
                      : "text-[#8B92A0] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                  }`}
                >
                  {sec.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Top Scroll Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-[#1B2130] lg:hidden"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#2E8B74]"
          style={{
            width: `${scrollPercent}%`,
            boxShadow: shouldReduceMotion ? "none" : "0 0 6px rgba(46, 139, 116, 0.5)",
            transition: shouldReduceMotion ? "none" : "width 0.1s linear",
          }}
        />
      </div>
    </>
  );
}
