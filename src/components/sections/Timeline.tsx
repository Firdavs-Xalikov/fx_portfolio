import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Terminal, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Cpu, 
  Sparkles,
  Trophy 
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { useLanguage } from "../../context/useLanguage";

const HOLOGRAPHIC_TIMELINE_NODES = [
  {
    year: "2023",
    title: "INIT // PROGRAMMING JOURNEY",
    category: "it",
    description: "Began mastering core software engineering fundamentals, algorithms, algorithms structure, and JavaScript paradigms.",
    details: ["HTML5, CSS3, Modern JavaScript (ES6+)", "Built initial web prototypes & UI projects"],
    icon: Terminal,
    hologramCode: "STATUS::ACTIVE // LEARNING_INITIALIZED",
  },
  {
    year: "2024",
    title: "CREDENTIAL // IELTS 6.5 BAND",
    category: "academic",
    description: "Certified international English proficiency, enabling global communication and research.",
    details: ["Reading: 6.5, Listening: 6.5, Speaking: 6.5, Writing: 6.0", "Certified by IDP Australia"],
    icon: Award,
    hologramCode: "LANG::EN_PROFFICIENT // VERIFIED",
  },
  {
    year: "2024",
    title: "DISCIPLINE // LOGISTICS & DISPATCH",
    category: "personal",
    description: "Worked as a logistics coordinator, managing real-time dispatch routes under high operational pressure.",
    details: ["Coordinated driver routes and live cargo tracking", "Developed high-stress communication skills"],
    icon: Briefcase,
    hologramCode: "DISPATCH::REALTIME_OPS // SUCCESS",
  },
  {
    year: "2024",
    title: "ACADEMIC // INT'L FINANCE LYCEUM",
    category: "academic",
    description: "Admitted into International Finance Lyceum with a high entrance score of 105.1.",
    details: ["Score: 105.1 Points", "Advanced Mathematics & Economics Focus"],
    icon: GraduationCap,
    hologramCode: "SCORE::105.1_POINTS // ADMITTED",
  },
  {
    year: "2025",
    title: "VICTORY // COMPETITION WINNER",
    category: "it",
    description: "Secured 1st place in regional hackathons & competitive programming algorithms challenge.",
    details: ["1st Place Programming Tournament", "Engineered fast algorithmic solvers"],
    icon: Trophy,
    hologramCode: "TOURNAMENT::1ST_PLACE // GOLD",
  },
  {
    year: "2026",
    title: "AI LAB // BUILDING AI PRODUCTS",
    category: "it",
    description: "Architecting modern AI-powered applications, LLM interfaces, and web experiences.",
    details: ["Building full-stack React & AI solutions", "Deploying high-performance web applications"],
    icon: Cpu,
    hologramCode: "NEURAL::AI_SUITE // PRODUCTION",
  },
  {
    year: "FUTURE",
    title: "HORIZON // COMPUTER SCIENCE USA",
    category: "academic",
    description: "Targeting top Computer Science & AI degree programs in the United States.",
    details: ["US University Undergraduate CS Studies", "Building frontier AI technologies"],
    icon: Sparkles,
    hologramCode: "DESTINATION::USA_CS // IN_PROGRESS",
  },
];

export default function Timeline() {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredEvents = selectedCategory === "all"
    ? HOLOGRAPHIC_TIMELINE_NODES
    : HOLOGRAPHIC_TIMELINE_NODES.filter(e => e.category === selectedCategory);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  const progressTransform = useTransform(scaleY, [0.15, 0.85], ["0%", "100%"]);

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="journey"
      className="py-28 md:py-36 px-6 border-b border-[#00F0FF]/20 relative"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#00F0FF] font-bold block mb-3">
              // HOLOGRAPHIC CHRONOLOGY
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              {t("journey_title")}
            </h2>
          </div>

          {/* Holographic Category Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: t("journey_all") },
              { id: "academic", label: t("journey_academic") },
              { id: "it", label: t("journey_it") },
              { id: "personal", label: "MILESTONES" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                aria-label={`Filter timeline by ${cat.label}`}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#00F0FF] text-[#050505] border-[#00F0FF] font-bold glow-blue"
                    : "bg-[#0A0D14] text-[#6B8F94] border-[#00F0FF]/20 hover:border-[#00F0FF] hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Holographic Spine Container */}
        <div className="relative mt-12">
          
          {/* Central Track Rule */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#00F0FF]/20 -translate-x-[0.5px] hidden md:block" />
          
          {/* Active Electric Blue Progress Line */}
          <motion.div 
            style={shouldReduceMotion ? undefined : { height: progressTransform, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-[#00F0FF] -translate-x-[1px] hidden md:block glow-blue"
          />

          {/* Floating Holographic Projection Nodes */}
          <motion.div
            variants={shouldReduceMotion ? undefined : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12"
          >
            {filteredEvents.map((event, idx) => {
              const Icon = event.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={`${language}-${idx}`}
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Holographic Target Emitter Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border-2 border-[#00F0FF] flex items-center justify-center z-20 shrink-0 glow-blue">
                    <Icon className="w-4 h-4 text-[#00F0FF]" />
                  </div>

                  {/* Mono Hologram Year Stamp */}
                  <div className={`pl-12 md:pl-0 w-full md:w-1/2 flex mb-2 md:mb-0 ${
                    isEven ? "md:justify-start md:pl-16" : "md:justify-end md:pr-16"
                  }`}>
                    <span className="font-mono text-base md:text-lg font-bold text-[#00F0FF] tracking-widest text-cyber-glow">
                      [{event.year}]
                    </span>
                  </div>

                  {/* Holographic Projection Card */}
                  <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                    isEven ? "md:pr-16" : "md:pl-16"
                  }`}>
                    <GlassCard className="p-6 md:p-8 border-[#00F0FF]/30 hover:border-[#9D00FF]">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 border border-[#00F0FF]/40 bg-[#050505] text-[#00F0FF]">
                          {event.hologramCode}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-xl font-bold text-white mb-2 tracking-tight">
                        {event.title}
                      </h3>
                      
                      <p className="text-sm text-[#6B8F94] mb-4 leading-relaxed font-normal">
                        {event.description}
                      </p>

                      <ul className="space-y-2 border-t border-[#00F0FF]/20 pt-4">
                        {event.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs text-[#6B8F94] flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] mt-1.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
