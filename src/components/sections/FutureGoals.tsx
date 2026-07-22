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
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <section id="goals" className="py-28 md:py-36 px-6 border-b border-white/[0.06]">
      <div className="max-w-[720px] mx-auto text-center">
        {/* Section tag */}
        <motion.span
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="font-sans text-xs uppercase tracking-[0.2em] text-[#71839A] font-medium block mb-4"
        >
          {t("goals_tag")}
        </motion.span>

        {/* Display quote statement */}
        <motion.h2
          key={language}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="font-display text-2xl md:text-3xl font-medium text-gradient-heading leading-relaxed tracking-tight mb-10"
        >
          "{t("goals_quote")}"
        </motion.h2>

        {/* Split-Timer Hairline Divider */}
        <div className="w-16 h-[1px] bg-[#4DA3FF] mx-auto mb-12 shadow-[0_0_12px_rgba(77,163,255,0.5)]" />

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
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.12 }}
                      transition={{ duration: 0.15 }}
                      className="w-8 h-8 border border-white/10 bg-white/[0.04] flex items-center justify-center mb-4 group-hover:border-[#4DA3FF]/50 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#4DA3FF]" />
                    </motion.div>
                    <h3 className="font-display text-base font-medium text-[#D8E6F5] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#A8B8CC] leading-relaxed font-light">
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
