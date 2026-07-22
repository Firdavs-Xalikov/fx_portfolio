import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, MessageSquare } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";
import MagneticButton from "../ui/MagneticButton";
import Luxury3DCanvas from "../ui/Luxury3DCanvas";

export default function Hero() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
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
          className="mb-8 font-sans text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-[#08111F]/60 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span>FRONTEND DEVELOPER &amp; AI ENGINEER</span>
        </motion.div>

        {/* Large Luxury Title */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="mb-8">
          <h1 className="font-display font-medium text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F5F5F7] tracking-tight leading-none">
            {t("hero_title")}
          </h1>
        </motion.div>

        {/* Subtitle Statement */}
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-12"
        >
          Engineering refined digital experiences, scalable web applications, and artificial intelligence interfaces with structural discipline.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
        >
          <MagneticButton
            onClick={handleScrollToProjects}
            ariaLabel="Scroll down to View Work projects section"
          >
            <div className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#F5F5F7] text-[#050505] font-sans text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-white transition-colors cursor-pointer shadow-lg">
              <span>VIEW WORK</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </div>
          </MagneticButton>
          
          <MagneticButton
            onClick={handleScrollToContact}
            ariaLabel="Scroll down to Connect contact section"
          >
            <div className="flex items-center justify-center gap-2 px-8 py-4 bg-[#08111F]/80 border border-white/10 text-[#F5F5F7] hover:border-white/30 font-sans text-xs font-medium uppercase tracking-wider rounded-full transition-colors cursor-pointer">
              <MessageSquare className="w-4 h-4 text-zinc-400" aria-hidden="true" />
              <span>CONNECT</span>
            </div>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-2 font-sans text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
        <span>SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-zinc-500 to-transparent" />
      </div>
    </section>
  );
}
