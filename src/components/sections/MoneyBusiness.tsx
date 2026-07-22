import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const LUXURY_BUSINESS_METRICS = [
  {
    title: "DIGITAL LOGISTICS OPERATIONS",
    value: "High-Volume Dispatch",
    subtext: "Real-time fleet route management & logistics optimization",
  },
  {
    title: "INT'L FINANCE ACADEMY",
    value: "105.1 Points",
    subtext: "High competitive score in mathematics & economics",
  },
  {
    title: "COMMERCIAL SOFTWARE",
    value: "Full-Stack SaaS",
    subtext: "Monetizable web applications & AI agent infrastructure",
  },
];

export default function MoneyBusiness() {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="business" className="py-32 md:py-44 px-8 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium block mb-3">
            BUSINESS &amp; VENTURES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[#F5F5F7] tracking-tight mb-4">
            DIGITAL ECONOMY
          </h2>
          <p className="text-zinc-400 max-w-xl font-light text-base">
            Logistics operational discipline, financial analytics, and scalable digital product engineering.
          </p>
        </motion.div>

        {/* Business Metrics Grid */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {LUXURY_BUSINESS_METRICS.map((metric, idx) => (
            <motion.div key={idx} variants={shouldReduceMotion ? undefined : itemVariants}>
              <GlassCard className="p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-zinc-400 block mb-3">
                    {metric.title}
                  </span>
                  
                  <div className="font-display text-2xl font-medium text-[#F5F5F7] mb-3">
                    {metric.value}
                  </div>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {metric.subtext}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
