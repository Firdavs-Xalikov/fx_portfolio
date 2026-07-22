import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { useLanguage } from "../../context/useLanguage";

const LUXURY_SKILL_ORBITS = [
  {
    category: "CORE STACK",
    skills: ["React 19", "Next.js 15", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS v4", "Vite 8"],
  },
  {
    category: "BACKEND & DEVOPS",
    skills: ["Node.js", "Express.js", "REST APIs", "Git & GitHub", "Linux CLI", "Networking"],
  },
  {
    category: "ARTIFICIAL INTELLIGENCE",
    skills: ["OpenAI API", "Claude 3.5 Sonnet", "Google Gemini", "Prompt Engineering", "RAG Systems", "AI Agent Pipelines"],
  },
  {
    category: "CYBERSECURITY",
    skills: ["Network Security", "Penetration Fundamentals", "Linux Administration", "Firewall Rules", "256-Bit Encryption"],
  },
];

export default function Skills() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

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
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-32 md:py-44 px-8 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#71839A] font-medium block mb-3">
            {t("skills_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-gradient-heading tracking-tight mb-4">
            {t("skills_title")}
          </h2>
          <p className="text-[#A8B8CC] max-w-xl font-light text-base">
            {t("skills_subtitle")}
          </p>
        </motion.div>

        {/* Minimal Grid */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {LUXURY_SKILL_ORBITS.map((orbit, idx) => (
            <motion.div key={idx} variants={shouldReduceMotion ? undefined : cardVariants}>
              <GlassCard className="p-8 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#71839A] mb-6">
                    {orbit.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {orbit.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-sans text-xs border border-white/10 bg-white/[0.03] text-[#A8B8CC] px-3 py-1.5 rounded-full tracking-wide hover:text-[#D8E6F5] hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
