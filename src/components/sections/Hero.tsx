import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, Cpu, Shield, Zap, Terminal } from "lucide-react";
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 border-b border-[#00F0FF]/20">
      <motion.div
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl text-center flex flex-col items-center"
      >
        {/* HUD Target Reticle Badge */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="mb-8 font-mono text-xs md:text-sm tracking-[0.15em] text-[#00F0FF] font-bold uppercase inline-flex items-center gap-2 px-4 py-1.5 border border-[#00F0FF]/40 bg-[#0A0D14]/80 glow-blue"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span>CYBERNETIC INTERFACE // ACTIVE PROTOCOL</span>
        </motion.div>

        {/* Massive Hero Name in Cyberpunk Orbitron Display */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="mb-6">
          <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-none text-cyber-glow">
            {t("hero_title")}
          </h1>
        </motion.div>

        {/* Subtitle Statements */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="font-hud font-bold text-lg sm:text-2xl md:text-3xl text-[#00F0FF] tracking-wider uppercase mb-8 flex flex-wrap justify-center gap-3"
        >
          <span className="flex items-center gap-1.5">
            <Zap className="w-5 h-5 text-[#00F0FF]" /> FRONTEND DEVELOPER
          </span>
          <span className="text-[#9D00FF]">•</span>
          <span className="flex items-center gap-1.5">
            <Cpu className="w-5 h-5 text-[#9D00FF]" /> AI BUILDER
          </span>
          <span className="text-[#00F0FF]">•</span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-5 h-5 text-[#00F0FF]" /> CYBERSECURITY ENTHUSIAST
          </span>
        </motion.div>

        {/* HUD Diagnostic Telemetry Panel */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 w-full max-w-3xl font-mono text-xs uppercase"
        >
          <div className="p-3 border border-[#00F0FF]/30 bg-[#0A0D14]/70 flex items-center justify-between">
            <span className="text-[#6B8F94]">SYSTEM_CORE</span>
            <span className="text-[#00F0FF] font-bold">ONLINE [99.9%]</span>
          </div>
          <div className="p-3 border border-[#9D00FF]/30 bg-[#0A0D14]/70 flex items-center justify-between">
            <span className="text-[#6B8F94]">QUANTUM_ENCRYPTION</span>
            <span className="text-[#9D00FF] font-bold">ACTIVE [256-BIT]</span>
          </div>
          <div className="p-3 border border-[#00F0FF]/30 bg-[#0A0D14]/70 flex items-center justify-between">
            <span className="text-[#6B8F94]">SWIM_DISCIPLINE</span>
            <span className="text-[#00F0FF] font-bold">06 YEARS</span>
          </div>
        </motion.div>

        {/* Subtitle Narrative */}
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="text-base sm:text-xl text-[#6B8F94] max-w-2xl font-normal leading-relaxed mb-10"
        >
          Carrying 6 years of competitive swimming discipline into software engineering — engineering high-performance WebGL interfaces &amp; AI architectures with structural precision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
        >
          <MagneticButton
            onClick={handleScrollToAchievements}
            ariaLabel="Scroll down to View Achievements section"
          >
            <div className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#00F0FF] text-[#050505] font-display text-xs font-black uppercase tracking-wider hover:bg-white transition-colors cursor-pointer glow-blue">
              <span>INITIALIZE PROTOCOL</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </div>
          </MagneticButton>
          
          <MagneticButton
            onClick={handleScrollToContact}
            ariaLabel="Scroll down to Connect with Me contact section"
          >
            <div className="flex items-center justify-center gap-2 px-8 py-4 bg-[#0A0D14] border border-[#00F0FF]/40 text-white hover:border-[#9D00FF] font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer">
              <Terminal className="w-4 h-4 text-[#00F0FF]" aria-hidden="true" />
              <span>ACCESS CYBER LAB</span>
            </div>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Hint */}
      <div className="mt-16 flex flex-col items-center gap-2 font-mono text-[10px] text-[#6B8F94] uppercase tracking-widest">
        <span>SCROLL TO ENGAGE</span>
        <div className="w-[1px] h-6 bg-[#00F0FF]/40" />
      </div>
    </section>
  );
}
