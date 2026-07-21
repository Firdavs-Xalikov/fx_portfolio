import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, MessageSquare } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";
import MagneticButton from "../ui/MagneticButton";
import SplitText from "../ui/SplitText";

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
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 border-b border-[#1C3B42]">
      <motion.div
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center flex flex-col items-center"
      >
        {/* Eyebrow Role Statement in Monospace with Split-Timer score badge */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="mb-8 font-digital text-xs md:text-sm tracking-[0.12em] text-[#00C2D1] font-bold uppercase inline-flex items-center gap-2 px-4 py-1.5 border border-[#1C3B42] bg-[#0F2830]"
        >
          <span className="w-2 h-2 rounded-full bg-[#00C2D1] glow-chlorine" />
          <span>STUDENT · FRONTEND DEVELOPER · CS &amp; AI</span>
        </motion.div>

        {/* Hero Name with SplitText Character/Word Animation */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="mb-8">
          <SplitText
            text={t("hero_title")}
            as="h1"
            mode="words"
            className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#EAF6F6] tracking-tighter leading-none"
          />
        </motion.div>

        {/* Scoreboard Split-Stat Badges */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8 font-digital text-xs uppercase tracking-[0.12em]"
        >
          <div className="px-3 py-1.5 border border-[#1C3B42] bg-[#0F2830] text-[#6B8F94]">
            SWIM DISCIPLINE <span className="text-[#00C2D1] font-bold ml-1">06 YEARS</span>
          </div>
          <div className="px-3 py-1.5 border border-[#1C3B42] bg-[#0F2830] text-[#6B8F94]">
            LANGUAGES <span className="text-[#00C2D1] font-bold ml-1">03 ACTIVE</span>
          </div>
          <div className="px-3 py-1.5 border border-[#1C3B42] bg-[#0F2830] text-[#6B8F94]">
            FOCUS <span className="text-[#00C2D1] font-bold ml-1">REACT &amp; AI</span>
          </div>
        </motion.div>

        {/* Subtitle / Discipline Statement */}
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="text-base sm:text-xl text-[#6B8F94] max-w-2xl font-normal leading-relaxed mb-10"
        >
          Carrying 6 years of competitive swimming discipline into software engineering — building scalable web applications with structural precision and focus.
        </motion.p>

        {/* Motto Citation */}
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="font-mono text-xs tracking-[0.08em] text-[#6B8F94] max-w-lg mb-12 italic"
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
            <div className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#00C2D1] text-[#0A2027] font-digital text-xs font-bold uppercase tracking-[0.12em] hover:bg-[#EAF6F6] transition-colors cursor-pointer glow-chlorine">
              <span>{t("hero_btn_achievements")}</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </div>
          </MagneticButton>
          
          <MagneticButton
            onClick={handleScrollToContact}
            ariaLabel="Scroll down to Connect with Me contact section"
          >
            <div className="flex items-center justify-center gap-2 px-8 py-4 bg-[#0F2830] border border-[#1C3B42] text-[#EAF6F6] hover:border-[#00C2D1] font-digital text-xs font-bold uppercase tracking-[0.12em] transition-colors cursor-pointer">
              <MessageSquare className="w-4 h-4 text-[#00C2D1]" aria-hidden="true" />
              <span>{t("hero_btn_contact")}</span>
            </div>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Hint */}
      <div className="mt-16 flex flex-col items-center gap-2 font-digital text-[10px] text-[#6B8F94] uppercase tracking-[0.12em]">
        <span>{t("hero_scroll")}</span>
        <div className="w-[1px] h-6 bg-[#1C3B42]" />
      </div>
    </section>
  );
}
