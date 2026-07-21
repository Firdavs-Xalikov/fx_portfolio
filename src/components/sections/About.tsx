import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { User, Shield, Compass } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { useLanguage } from "../../context/useLanguage";

export default function About() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  // Staggered reveal variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section id="about" className="py-28 md:py-36 px-6 bg-midnight-gradient border-b border-[rgba(251,245,183,0.08)]">
      <motion.div
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[720px] mx-auto"
      >
        {/* Section Header with Metallic Gold Gradient Title & Centered Emerald Icon */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#2FAF83] font-bold block mb-3">
            {t("about_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight inline-flex items-center justify-center gap-3">
            <User className="w-8 h-8 md:w-9 md:h-9 text-[#2FAF83] shrink-0" aria-hidden="true" />
            <span className="text-gold-gradient">{t("about_title")}</span>
          </h2>
        </motion.div>

        {/* Primary Narrative Biography Panel with 3D Tilt & Sheen */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="mb-10">
          <GlassCard className="p-8 md:p-10 space-y-6">
            <p className="text-[#F5F1E8]/85 text-base md:text-lg leading-[1.7] font-normal">
              {t("about_journey_p1")}
            </p>
            
            {/* Pull Quote Line with 3px Emerald Left Border */}
            <div className="border-l-[3px] border-[#2FAF83] pl-6 py-1 my-6">
              <blockquote className="font-display font-semibold text-xl md:text-2xl text-[#F5F1E8] leading-snug tracking-tight">
                "{t("about_quote")}"
              </blockquote>
            </div>

            <p className="text-[#9198A5] text-sm leading-relaxed italic border-t border-[rgba(251,245,183,0.08)] pt-4">
              {t("about_journey_p2")}
            </p>
          </GlassCard>
        </motion.div>

        {/* Pillars / Key Metadata Grid with Interactive Motion */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Current Focus & Interactive Language Chips */}
          <GlassCard className="p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#2FAF83] font-bold block mb-2">
                {t("about_focus_label")}
              </span>
              <p className="font-display font-semibold text-lg text-[#F5F1E8] mb-4">
                {t("about_focus_val")}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-[rgba(251,245,183,0.08)]">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#9198A5] block mb-3">
                {t("about_languages_label")}
              </span>
              <div className="flex flex-wrap gap-2">
                {["Uzbek", "Russian", "English"].map((lang) => (
                  <motion.span
                    key={lang}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -2,
                            borderColor: "rgba(251, 245, 183, 0.35)",
                            backgroundColor: "#0D131F",
                          }
                    }
                    transition={{ duration: 0.2 }}
                    className="font-mono text-xs uppercase tracking-[0.08em] px-3 py-1.5 border border-[rgba(251,245,183,0.08)] bg-[#05070C] text-[#F5F1E8] cursor-default shadow-sm transition-colors"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Right Column: Values & Credentials with Icon Micro-Interactions */}
          <div className="space-y-4 flex flex-col">
            <GlassCard className="p-6 flex items-start gap-4 group">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-10 h-10 border border-[rgba(251,245,183,0.08)] bg-[#05070C] flex items-center justify-center shrink-0 group-hover:border-[#2FAF83] transition-colors"
              >
                <Shield className="w-5 h-5 text-[#2FAF83]" />
              </motion.div>
              <div>
                <h3 className="font-display font-bold text-base text-[#F5F1E8] mb-1">
                  {t("about_val1_title")}
                </h3>
                <p className="text-xs text-[#9198A5] leading-relaxed">
                  {t("about_val1_desc")}
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-6 flex items-start gap-4 group">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-10 h-10 border border-[rgba(251,245,183,0.08)] bg-[#05070C] flex items-center justify-center shrink-0 group-hover:border-[#2FAF83] transition-colors"
              >
                <Compass className="w-5 h-5 text-[#2FAF83]" />
              </motion.div>
              <div>
                <h3 className="font-display font-bold text-base text-[#F5F1E8] mb-1">
                  {t("about_val2_title")}
                </h3>
                <p className="text-xs text-[#9198A5] leading-relaxed">
                  {t("about_val2_desc")}
                </p>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
