import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MessageSquare } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";

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

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 bg-[#FAFAF7] border-b border-[#E4E3DF]">
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        {/* Role Statement in Monospace */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          className="mb-8 font-mono text-xs md:text-sm tracking-widest text-[#1F4E79] font-semibold uppercase"
        >
          STUDENT · FRONTEND DEVELOPER · CS &amp; AI
        </motion.div>

        {/* Hero Name in Neo-Grotesk Display Face */}
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#14151A] tracking-tighter leading-none mb-8"
        >
          {t("hero_title")}
        </motion.h1>

        {/* Subtitle / Discipline Statement */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-[#6B6B70] max-w-2xl font-normal leading-relaxed mb-10"
        >
          Carrying 6 years of competitive swimming discipline into software engineering — building scalable web applications with structural precision and focus.
        </motion.p>

        {/* Motto Citation */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.3 }}
          className="font-mono text-xs text-[#6B6B70] max-w-lg mb-12 italic"
        >
          "{t("hero_intro")}"
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleScrollToAchievements}
            aria-label="Scroll down to View Achievements section"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#1F4E79] text-[#FAFAF7] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#14151A] transition-colors cursor-pointer"
          >
            <span>{t("hero_btn_achievements")}</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </button>
          
          <button
            onClick={handleScrollToContact}
            aria-label="Scroll down to Connect with Me contact section"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[#E4E3DF] text-[#14151A] hover:border-[#1F4E79] font-mono text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#1F4E79]" aria-hidden="true" />
            <span>{t("hero_btn_contact")}</span>
          </button>
        </motion.div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="mt-16 flex flex-col items-center gap-2 font-mono text-[10px] text-[#6B6B70] uppercase tracking-widest">
        <span>{t("hero_scroll")}</span>
        <div className="w-[1px] h-6 bg-[#E4E3DF]" />
      </div>
    </section>
  );
}
