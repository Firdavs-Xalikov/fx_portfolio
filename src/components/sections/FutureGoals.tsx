import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Compass, Cpu, TrendingUp } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { useLanguage } from "../../context/useLanguage";

export default function FutureGoals() {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const goalPillars = [
    {
      title: t("goals_se_title"),
      description: t("goals_se_desc"),
      icon: TrendingUp,
    },
    {
      title: t("goals_global_title"),
      description: t("goals_global_desc"),
      icon: Compass,
    },
    {
      title: t("goals_tech_title"),
      description: t("goals_tech_desc"),
      icon: Cpu,
    },
  ];

  // Staggered reveal variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="goals" className="py-28 md:py-36 px-6 border-b border-[rgba(251,245,183,0.08)]">
      <div className="max-w-[720px] mx-auto text-center">
        
        {/* Section tag */}
        <motion.span
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs uppercase tracking-[0.12em] text-[#2FAF83] font-bold block mb-4"
        >
          {t("goals_tag")}
        </motion.span>

        {/* Display quote statement */}
        <motion.h2
          key={language}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-2xl md:text-3xl font-semibold text-[#F5F1E8] leading-relaxed tracking-tight mb-10"
        >
          "{t("goals_quote")}"
        </motion.h2>

        {/* Hairline Divider */}
        <div className="w-16 h-[1px] bg-[#2FAF83] mx-auto mb-12" />

        {/* Pillars Grid with Staggered Scroll Entrance */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left"
        >
          {goalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            
            return (
              <motion.div key={`${language}-${idx}`} variants={shouldReduceMotion ? undefined : itemVariants}>
                <GlassCard className="p-6 h-full flex flex-col justify-between group">
                  <div>
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-8 h-8 border border-[rgba(251,245,183,0.08)] bg-[#05070C] flex items-center justify-center mb-4 group-hover:border-[#2FAF83] transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#2FAF83]" />
                    </motion.div>
                    <h3 className="font-display text-base font-bold text-[#F5F1E8] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#9198A5] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
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
