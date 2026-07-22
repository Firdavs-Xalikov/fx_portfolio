import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { useLanguage } from "../../context/useLanguage";

export default function About() {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="py-32 md:py-44 px-8 border-b border-white/[0.06]">
      <motion.div
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[800px] mx-auto"
      >
        {/* Section Tag */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="text-center mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#71839A] font-medium block mb-4">
            {t("about_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-gradient-heading tracking-tight">
            {t("about_title")}
          </h2>
        </motion.div>

        {/* Narrative Card */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="mb-12">
          <GlassCard className="p-10 md:p-12 space-y-8">
            <p className="text-[#D8E6F5] text-lg md:text-xl leading-relaxed font-light">
              {t("about_journey_p1")}
            </p>

            <div className="border-l-2 border-[#4DA3FF]/40 pl-8 py-2 my-8">
              <blockquote className="font-display text-xl md:text-2xl text-[#D8E6F5] font-medium leading-snug tracking-tight">
                "{t("about_quote")}"
              </blockquote>
            </div>

            <p className="text-[#A8B8CC] text-sm leading-relaxed font-light">
              {t("about_journey_p2")}
            </p>
          </GlassCard>
        </motion.div>

        {/* Pillars / Metadata Grid */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-8">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#71839A] font-medium block mb-3">
              {t("about_focus_label")}
            </span>
            <p className="font-display font-medium text-xl text-[#D8E6F5] mb-6">
              {t("about_focus_val")}
            </p>

            <div className="pt-6 border-t border-white/10">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#71839A] block mb-3">
                {t("about_languages_label")}
              </span>
              <div className="flex flex-wrap gap-2">
                {["Uzbek", "Russian", "English"].map((lang) => (
                  <span
                    key={lang}
                    className="font-sans text-xs px-3.5 py-1.5 border border-white/10 rounded-full bg-white/[0.03] text-[#A8B8CC]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#71839A] font-medium block mb-3">
                PHILOSOPHY
              </span>
              <p className="font-display font-medium text-xl text-[#D8E6F5] mb-3">
                Precision &amp; Structural Simplicity
              </p>
              <p className="text-xs text-[#A8B8CC] leading-relaxed font-light">
                Crafting minimalist software that solves complex problems with elegance, speed, and zero superfluous clutter.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
