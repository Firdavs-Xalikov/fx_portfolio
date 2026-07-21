import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, MessageSquare } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToAchievements = () => {
    const section = document.getElementById("achievements");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Staggered reveal variants typed with Variants
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
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 border-b border-[rgba(251,245,183,0.08)]">
      <motion.div
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center flex flex-col items-center"
      >
        {/* Eyebrow Role Statement in Monospace with 0.12em tracking */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="mb-8 font-mono text-xs md:text-sm tracking-[0.12em] text-[#2FAF83] font-semibold uppercase"
        >
          STUDENT · FRONTEND DEVELOPER · CS &amp; AI
        </motion.div>

        {/* Hero Name in Gold Gradient Text-Fill with Confident Weight (600) */}
        <motion.h1
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="font-display font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gold-gradient tracking-tighter leading-none mb-8"
        >
          {t("hero_title")}
        </motion.h1>

        {/* Subtitle / Discipline Statement */}
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="text-base sm:text-xl text-[#9198A5] max-w-2xl font-normal leading-relaxed mb-10"
        >
          Carrying 6 years of competitive swimming discipline into software engineering — building scalable web applications with structural precision and focus.
        </motion.p>

        {/* Motto Citation */}
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="font-mono text-xs tracking-[0.08em] text-[#9198A5] max-w-lg mb-12 italic"
        >
          "{t("hero_intro")}"
        </motion.p>

        {/* CTA Buttons with Magnetic Pull */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
        >
          <MagneticButton
            onClick={handleScrollToAchievements}
            ariaLabel="Scroll down to View Achievements section"
          >
            <div className="group flex items-center justify-center gap-2 px-8 py-4 bg-jewel-emerald text-[#F5F1E8] font-mono text-xs font-semibold uppercase tracking-[0.12em] hover:opacity-90 transition-opacity cursor-pointer shadow-[0_0_15px_rgba(47,175,131,0.2)]">
              <span>{t("hero_btn_achievements")}</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </div>
          </MagneticButton>
          
          <MagneticButton
            onClick={handleScrollToContact}
            ariaLabel="Scroll down to Connect with Me contact section"
          >
            <div className="flex items-center justify-center gap-2 px-8 py-4 bg-[#0A0F19] border border-[rgba(251,245,183,0.15)] text-[#F5F1E8] hover:border-[#2FAF83] font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-colors cursor-pointer">
              <MessageSquare className="w-4 h-4 text-[#2FAF83]" aria-hidden="true" />
              <span>{t("hero_btn_contact")}</span>
            </div>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Hint */}
      <div className="mt-16 flex flex-col items-center gap-2 font-mono text-[10px] text-[#9198A5] uppercase tracking-[0.12em]">
        <span>{t("hero_scroll")}</span>
        <div className="w-[1px] h-6 bg-[rgba(251,245,183,0.12)]" />
      </div>
    </section>
  );
}
