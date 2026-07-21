import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { useLanguage } from "../../context/useLanguage";
import { 
  Code, 
  Cpu, 
  Shield, 
  Database
} from "lucide-react";

const SKILL_GALAXY_ORBITS = [
  {
    category: "CORE FRONTEND // STACK",
    icon: Code,
    skills: ["React 19", "Next.js 15", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS v4", "Vite 8"],
    status: "ORBIT_SPEED // 100%",
  },
  {
    category: "BACKEND & ARCHITECTURE",
    icon: Database,
    skills: ["Node.js", "Express.js", "REST APIs", "Git & GitHub", "Linux CLI", "Networking"],
    status: "ORBIT_SPEED // 95%",
  },
  {
    category: "ARTIFICIAL INTELLIGENCE",
    icon: Cpu,
    skills: ["OpenAI API", "Claude 3.5 Sonnet", "Google Gemini", "Prompt Engineering", "RAG Systems", "AI Agent Pipelines"],
    status: "ORBIT_SPEED // 98%",
  },
  {
    category: "CYBERSECURITY & NETWORKING",
    icon: Shield,
    skills: ["Network Security", "Penetration Fundamentals", "Linux Administration", "Firewall Rules", "256-Bit Encryption"],
    status: "ORBIT_SPEED // 92%",
  },
];

export default function Skills() {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  // Staggered reveal variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-28 md:py-36 px-6 border-b border-[#00F0FF]/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#00F0FF] font-bold block mb-3">
            // 3D ORBITAL MATRIX
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            SKILLS GALAXY &amp; TECH MATRIX
          </h2>
          <p className="text-[#6B8F94] max-w-xl font-normal text-base">
            High-performance technology stack orbiting modern web development, artificial intelligence, and cybersecurity.
          </p>
        </motion.div>

        {/* Orbital Categories Grid */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILL_GALAXY_ORBITS.map((orbit, idx) => {
            const Icon = orbit.icon;
            
            return (
              <motion.div key={`${language}-${idx}`} variants={shouldReduceMotion ? undefined : cardVariants}>
                <GlassCard className="p-8 flex flex-col justify-between h-full group border-[#00F0FF]/30 hover:border-[#9D00FF]">
                  <div>
                    {/* Orbit Header with Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.15, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="w-10 h-10 border border-[#00F0FF]/40 bg-[#050505] flex items-center justify-center shrink-0 group-hover:border-[#9D00FF] transition-colors glow-blue"
                      >
                        <Icon className="w-5 h-5 text-[#00F0FF]" />
                      </motion.div>
                      <h3 className="font-display text-sm font-bold text-white tracking-wider">
                        {orbit.category}
                      </h3>
                    </div>

                    <div className="font-mono text-[10px] text-[#00F0FF] mb-6 tracking-widest uppercase">
                      {orbit.status}
                    </div>

                    {/* Orbit Skill Chips */}
                    <div className="flex flex-wrap gap-2">
                      {orbit.skills.map((skill, sIdx) => (
                        <motion.span
                          key={sIdx}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  y: -2,
                                  borderColor: "#00F0FF",
                                  backgroundColor: "#0A0D14",
                                }
                          }
                          transition={{ duration: 0.15 }}
                          className="font-mono text-xs border border-[#00F0FF]/30 bg-[#050505] text-white px-2.5 py-1 tracking-wider cursor-default transition-all"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Orbit Telemetry Footer */}
                  <div className="mt-10 pt-4 border-t border-[#00F0FF]/20 flex items-center justify-between font-mono text-[10px] text-[#6B8F94] uppercase tracking-wider">
                    <span>TELEMETRY</span>
                    <span className="text-[#00F0FF] font-bold">100% ONLINE</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
