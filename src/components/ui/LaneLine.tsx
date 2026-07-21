import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  { id: "hero", num: "01", label: "HERO" },
  { id: "about", num: "02", label: "ABOUT" },
  { id: "journey", num: "03", label: "JOURNEY" },
  { id: "skills", num: "04", label: "SKILLS" },
  { id: "projects", num: "05", label: "PROJECTS" },
  { id: "achievements", num: "06", label: "CREDENTIALS" },
  { id: "goals", num: "07", label: "VISION" },
  { id: "contact", num: "08", label: "CONTACT" },
];

export default function LaneLine() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [pulsingSection, setPulsingSection] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const fillLineRef = useRef<HTMLDivElement>(null);

  // Frame-accurate GSAP ScrollTrigger fill animation & active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveSection((prev) => {
          if (prev !== "contact") {
            if (!shouldReduceMotion) {
              setPulsingSection("contact");
              setTimeout(() => setPulsingSection(null), 600);
            }
            return "contact";
          }
          return prev;
        });
        return;
      }

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection((prev) => {
              if (prev !== section.id) {
                if (!shouldReduceMotion) {
                  setPulsingSection(section.id);
                  setTimeout(() => setPulsingSection(null), 600);
                }
                return section.id;
              }
              return prev;
            });
            break;
          }
        }
      }
    };

    // Frame-accurate GSAP ScrollTrigger for smooth fill progress
    const st = ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress * 100;
        setScrollPercent(progress);
        handleScroll();
      },
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      st.kill();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [shouldReduceMotion]);

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
        {/* Background Track Rule in Hairline Gold */}
        <div className="absolute top-0 bottom-0 left-[7px] w-[1px] bg-[rgba(251,245,183,0.08)]" />

        {/* Jewel Emerald Fill Line with GSAP ScrollTrigger Sync */}
        <div
          ref={fillLineRef}
          className="absolute top-0 left-[6.5px] w-[2px] bg-jewel-emerald"
          style={{
            height: `${scrollPercent}%`,
            boxShadow: shouldReduceMotion ? "none" : "0 0 12px 1px rgba(47, 175, 131, 0.35)",
            transition: shouldReduceMotion ? "none" : "height 0.05s linear",
          }}
        />

        {/* Section Turn Markers */}
        <div className="absolute inset-y-0 left-0 w-max flex flex-col justify-between py-24 pointer-events-auto">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            const isPulsing = pulsingSection === sec.id;

            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                aria-label={`Jump to ${sec.num} · ${sec.label}`}
                className="group flex items-center gap-3 py-1 cursor-pointer focus:outline-none"
              >
                {/* Tick Mark with Active Glow Pulse Animation */}
                <motion.div
                  animate={
                    isPulsing && !shouldReduceMotion
                      ? {
                          scale: [1, 1.4, 1],
                          boxShadow: [
                            "0 0 4px rgba(47,175,131,0.4)",
                            "0 0 16px rgba(47,175,131,0.9)",
                            "0 0 6px rgba(47,175,131,0.5)",
                          ],
                        }
                      : undefined
                  }
                  transition={{ duration: 0.6 }}
                  className={`h-[2px] transition-all duration-300 ${
                    isActive
                      ? "w-4 bg-jewel-emerald emerald-bioluminescent-glow"
                      : "w-2 bg-[#9198A5] group-hover:w-3 group-hover:bg-[#F5F1E8]"
                  }`}
                />
                
                {/* Signature Numeral & Mono Label with 0.12em tracking */}
                <div
                  className={`font-mono text-[11px] tracking-[0.12em] uppercase transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "opacity-100 translate-x-0 font-semibold"
                      : "text-[#9198A5] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                  }`}
                >
                  <span className={isActive ? "text-gold-gradient font-bold" : ""}>
                    {sec.num}
                  </span>
                  <span className={isActive ? "text-[#2FAF83]" : ""}>
                    · {sec.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Top Jewel Emerald Scroll Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-[rgba(251,245,183,0.08)] lg:hidden"
        aria-hidden="true"
      >
        <div
          className="h-full bg-jewel-emerald"
          style={{
            width: `${scrollPercent}%`,
            boxShadow: shouldReduceMotion ? "none" : "0 0 10px rgba(47, 175, 131, 0.4)",
            transition: shouldReduceMotion ? "none" : "width 0.05s linear",
          }}
        />
      </div>
    </>
  );
}
