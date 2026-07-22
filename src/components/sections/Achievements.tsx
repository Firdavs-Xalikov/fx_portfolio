import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import CountUp from "../ui/CountUp";
import { 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Activity, 
  Trophy, 
  Globe
} from "lucide-react";
import { useLanguage } from "../../context/useLanguage";

const iconMap: Record<string, any> = {
  Award,
  BookOpen,
  ShieldCheck,
  Activity,
  Trophy,
  Globe,
};

interface Achievement {
  title: string;
  metric: string;
  subMetric?: string;
  description: string;
  category: "academic" | "language" | "it" | "athletics";
  year: string;
  iconName: string;
}

export default function Achievements() {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const achievements = t("achievements_list") as Achievement[];

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
    <section id="achievements" className="py-28 md:py-36 px-6 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-20"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#71839A] font-medium block mb-3">
            {t("achievements_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-gradient-heading tracking-tight mb-4">
            {t("achievements_title")}
          </h2>
          <p className="text-[#A8B8CC] max-w-xl font-light text-base">
            {t("achievements_subtitle")}
          </p>
        </motion.div>

        {/* Credentials Grid with Staggered Scroll Entrance */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Award;
            const isPbGold = idx === 0 || idx === 3;

            return (
              <motion.div key={`${language}-${idx}`} variants={shouldReduceMotion ? undefined : itemVariants}>
                <GlassCard className="p-8 flex flex-col justify-between h-full group">
                  <div>
                    {/* Badge & Year Header */}
                    <div className="flex items-center justify-between mb-8">
                      <motion.div
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.12 }}
                        transition={{ duration: 0.15 }}
                        className="w-10 h-10 border border-white/10 bg-white/[0.04] flex items-center justify-center group-hover:border-[#4DA3FF]/50 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-[#4DA3FF]" />
                      </motion.div>
                      <div className="flex items-center gap-2">
                        {isPbGold && (
                          <span className="font-mono text-[10px] font-semibold text-[#D4AF37] border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-2 py-0.5 tracking-wider">
                            PB / GOLD MEDAL
                          </span>
                        )}
                        <span className="font-mono text-xs text-[#71839A] font-medium border border-white/10 px-2.5 py-0.5 tracking-wider">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Primary Metric Callout */}
                    <div className="mb-6">
                      <div className={`font-display text-3xl font-bold tracking-tight ${
                        isPbGold ? "text-[#D4AF37] inline-block pb-1" : "text-[#4DA3FF]"
                      }`}>
                        <CountUp value={item.metric} />
                      </div>
                      {item.subMetric && (
                        <div className="font-mono text-xs text-[#71839A] font-medium mt-2 tracking-wide">
                          {item.subMetric}
                        </div>
                      )}
                    </div>

                    {/* Achievement Title */}
                    <h3 className="font-display text-lg font-medium text-[#D8E6F5] mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#A8B8CC] font-light leading-relaxed mb-8">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer validation tag */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] uppercase font-medium tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        isPbGold ? "bg-[#D4AF37]" : "bg-[#4DA3FF]"
                      }`} />
                      <span className={isPbGold ? "text-[#D4AF37] font-semibold" : "text-[#4DA3FF]"}>
                        {t("achievements_verified")}
                      </span>
                    </span>
                    <span className="text-[#71839A]">{t("achievements_label")}</span>
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
