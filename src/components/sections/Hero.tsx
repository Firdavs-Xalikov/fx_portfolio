import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, MessageSquare } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";
import MagneticButton from "../ui/MagneticButton";
import Luxury3DCanvas from "../ui/Luxury3DCanvas";
import { scrollToElement } from "../ui/SmoothScroll";
import { useTheme } from "../../context/ThemeContext";

export default function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToProjects = () => {
    scrollToElement("projects");
  };

  const handleScrollToContact = () => {
    scrollToElement("contact");
  };

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
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-8 pt-32 pb-24 border-b border-white/[0.06] overflow-hidden">
      {/* 3D Glass Studio Sculpture Object */}
      <Luxury3DCanvas />

      <motion.div
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl text-center flex flex-col items-center"
      >
        {/* Minimal Category Pill */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="mb-8 font-sans text-xs uppercase tracking-[0.2em] text-[#71839A] font-medium inline-flex items-center gap-2.5 px-4 py-1.5 border border-white/10 rounded-full bg-white/[0.03] backdrop-blur-md"
        >
          <span
            className="w-2 h-2 rounded-full transition-colors duration-500"
            style={{
              backgroundColor: theme.accent,
              boxShadow: `0 0 8px ${theme.glow}`,
            }}
          />
          <span>FRONTEND DEVELOPER &amp; AI ENGINEER</span>
        </motion.div>

        {/* Large Hero Title with #E8F3FF -> #7DB7FF Luxury Gradient */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="mb-8">
          <h1 className="font-display font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-gradient-hero">
            {t("hero_title")}
          </h1>
        </motion.div>

        {/* Subtitle Statement in #A8B8CC */}
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="text-lg sm:text-xl text-[#A8B8CC] max-w-2xl font-light leading-relaxed mb-12"
        >
          Engineering refined digital experiences, scalable web applications, and artificial intelligence interfaces with structural discipline.
        </motion.p>

        {/* CTA Buttons in #F0F7FF */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
        >
          <MagneticButton
            onClick={handleScrollToProjects}
            ariaLabel="Scroll down to View Work projects section"
          >
            <div
              className="group flex items-center justify-center gap-3 px-8 py-4 text-[#F0F7FF] font-sans text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer shadow-lg border border-white/20 hover:scale-[1.02]"
              style={{
                backgroundColor: theme.sec,
                borderColor: theme.accent,
                boxShadow: `0 0 20px ${theme.glow}40`,
              }}
            >
              <span>VIEW WORK</span>
              <ArrowDown className="w-4 h-4 text-[#4DA3FF] transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </div>
          </MagneticButton>

          <MagneticButton
            onClick={handleScrollToContact}
            ariaLabel="Scroll down to Connect contact section"
          >
            <div className="flex items-center justify-center gap-2.5 px-8 py-4 bg-white/[0.04] border border-white/10 text-[#F0F7FF] hover:border-white/30 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(77,163,255,0.25)] font-sans text-xs font-medium uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer">
              <MessageSquare className="w-4 h-4 text-[#4DA3FF]" aria-hidden="true" />
              <span>CONNECT</span>
            </div>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Minimal Scroll Indicator in #71839A */}
      <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-2 font-sans text-[10px] text-[#71839A] uppercase tracking-[0.2em]">
        <span>SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#71839A] to-transparent" />
      </div>
    </section>
  );
}
