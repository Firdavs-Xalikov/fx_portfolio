import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

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

export default function SplitClock() {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [activeLap, setActiveLap] = useState(SECTIONS[0]);
  const [isFrozen, setIsFrozen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const startTimeRef = useRef<number>(0);
  const frozenTimeRef = useRef<number>(0);

  // Timer loop
  useEffect(() => {
    if (shouldReduceMotion) return;

    startTimeRef.current = performance.now();

    const interval = setInterval(() => {
      if (!isFrozen) {
        setElapsedMs(performance.now() - startTimeRef.current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isFrozen, shouldReduceMotion]);

  // Section observer for lap splits
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        const contactSec = SECTIONS[SECTIONS.length - 1];
        setActiveLap((prev) => {
          if (prev.id !== contactSec.id) {
            triggerLapSplit();
            return contactSec;
          }
          return prev;
        });
        return;
      }

      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLap((prev) => {
              if (prev.id !== sec.id) {
                triggerLapSplit();
                return sec;
              }
              return prev;
            });
            break;
          }
        }
      }
    };

    const triggerLapSplit = () => {
      if (shouldReduceMotion) return;
      frozenTimeRef.current = performance.now() - startTimeRef.current;
      setIsFrozen(true);
      setTimeout(() => {
        setIsFrozen(false);
      }, 500); // Freeze for 500ms
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldReduceMotion]);

  // Format MM:SS.ms
  const currentMs = isFrozen ? frozenTimeRef.current : elapsedMs;
  const totalSeconds = Math.floor(currentMs / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  const millis = String(Math.floor((currentMs % 1000) / 10)).padStart(2, "0");

  const formattedTime = shouldReduceMotion ? "00:00.00" : `${minutes}:${seconds}.${millis}`;

  return (
    <div
      aria-label={`Swim meet split timer: ${formattedTime}, current section ${activeLap.label}`}
      className="fixed bottom-6 left-6 z-40 hidden sm:flex flex-col items-start bg-[#0A2027]/90 border border-[#1C3B42] backdrop-blur-md px-4 py-2.5 shadow-xl font-digital pointer-events-auto"
    >
      <div className="flex items-center gap-2">
        <motion.div
          animate={isFrozen && !shouldReduceMotion ? { scale: [1, 1.2, 1], opacity: [1, 0.4, 1] } : undefined}
          transition={{ duration: 0.3 }}
          className="w-2 h-2 rounded-full bg-[#00C2D1] glow-chlorine"
        />
        <span className="text-xs uppercase tracking-[0.12em] text-[#6B8F94]">
          {isFrozen ? "SPLIT RECORDED" : "RUNNING SPLIT"}
        </span>
      </div>

      <div className="text-xl font-bold tracking-widest text-[#00C2D1] text-chlorine-glow mt-1">
        {formattedTime}
      </div>

      <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#6B8F94] mt-1 pt-1 border-t border-[#1C3B42] w-full">
        LAP {activeLap.num} — <span className="text-[#EAF6F6] font-bold">{activeLap.label}</span>
      </div>
    </div>
  );
}
