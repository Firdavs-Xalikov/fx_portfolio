import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useState } from "react";
import GlassCard from "../ui/GlassCard";
import { useLanguage } from "../../context/useLanguage";

const MINIMAL_TIMELINE_NODES = [
  {
    year: "2023",
    title: "Programming Foundation",
    category: "it",
    description: "Began mastering core software engineering fundamentals, algorithms, algorithms structure, and JavaScript paradigms.",
    details: ["HTML5, CSS3, Modern JavaScript (ES6+)", "Built initial web prototypes & UI projects"],
  },
  {
    year: "2024",
    title: "IELTS 6.5 Certified",
    category: "academic",
    description: "Certified international English proficiency, enabling global communication and research.",
    details: ["Reading: 6.5, Listening: 6.5, Speaking: 6.5, Writing: 6.0", "Certified by IDP Australia"],
  },
  {
    year: "2024",
    title: "Logistics & Real-Time Operations",
    category: "personal",
    description: "Worked as a logistics coordinator, managing real-time dispatch routes under high operational pressure.",
    details: ["Coordinated driver routes and live cargo tracking", "Developed high-stress communication skills"],
  },
  {
    year: "2024",
    title: "Int'l Finance Lyceum Admission",
    category: "academic",
    description: "Admitted into International Finance Lyceum with a high entrance score of 105.1.",
    details: ["Score: 105.1 Points", "Advanced Mathematics & Economics Focus"],
  },
  {
    year: "2025",
    title: "Competitive Programming Winner",
    category: "it",
    description: "Secured 1st place in regional hackathons & competitive programming algorithms challenge.",
    details: ["1st Place Programming Tournament", "Engineered fast algorithmic solvers"],
  },
  {
    year: "2026",
    title: "Building AI Products",
    category: "it",
    description: "Architecting modern AI-powered applications, LLM interfaces, and web experiences.",
    details: ["Building full-stack React & AI solutions", "Deploying high-performance web applications"],
  },
  {
    year: "Future",
    title: "Computer Science in USA",
    category: "academic",
    description: "Targeting top Computer Science & AI degree programs in the United States.",
    details: ["US University Undergraduate CS Studies", "Building frontier AI technologies"],
  },
];

export default function Timeline() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredEvents = selectedCategory === "all"
    ? MINIMAL_TIMELINE_NODES
    : MINIMAL_TIMELINE_NODES.filter(e => e.category === selectedCategory);

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
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="journey"
      className="py-32 md:py-44 px-8 border-b border-white/[0.06] relative"
      ref={containerRef}
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium block mb-3">
              {t("journey_tag")}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#F5F5F7] tracking-tight">
              {t("journey_title")}
            </h2>
          </div>

          {/* Minimal Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: t("journey_all") },
              { id: "academic", label: t("journey_academic") },
              { id: "it", label: t("journey_it") }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                aria-label={`Filter timeline by ${cat.label}`}
                className={`font-sans text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#F5F5F7] text-[#050505] border-[#F5F5F7] font-semibold"
                    : "bg-[#08111F]/60 text-zinc-400 border-white/10 hover:border-white/30 hover:text-[#F5F5F7]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Minimal Timeline */}
        <div className="relative mt-12">
          
          {/* Central Track Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-[0.5px] hidden md:block" />
          
          <motion.div 
            style={shouldReduceMotion ? undefined : { height: progressTransform, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 w-[1px] bg-[#F5F5F7] -translate-x-[0.5px] hidden md:block"
          />

          {/* Timeline Nodes */}
          <motion.div
            variants={shouldReduceMotion ? undefined : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12"
          >
            {filteredEvents.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={idx}
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Spine Node Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border border-white/40 flex items-center justify-center z-20 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F5F5F7]" />
                  </div>

                  {/* Year Tag */}
                  <div className={`pl-12 md:pl-0 w-full md:w-1/2 flex mb-2 md:mb-0 ${
                    isEven ? "md:justify-start md:pl-16" : "md:justify-end md:pr-16"
                  }`}>
                    <span className="font-mono text-sm md:text-base text-zinc-400 tracking-widest uppercase">
                      {event.year}
                    </span>
                  </div>

                  {/* Details Card */}
                  <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                    isEven ? "md:pr-16" : "md:pl-16"
                  }`}>
                    <GlassCard className="p-8">
                      <h3 className="font-display text-xl font-medium text-[#F5F5F7] mb-2 tracking-tight">
                        {event.title}
                      </h3>
                      
                      <p className="text-sm text-zinc-400 mb-4 leading-relaxed font-light">
                        {event.description}
                      </p>

                      <ul className="space-y-2 border-t border-white/10 pt-4">
                        {event.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs text-zinc-400 flex items-start gap-2 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-white/40 mt-1.5 shrink-0" />
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
