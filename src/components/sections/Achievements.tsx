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
    <section id="achievements" className="py-28 md:py-36 px-6 border-b border-[#1C3B42]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-20"
        >
          <span className="font-digital text-xs uppercase tracking-[0.12em] text-[#00C2D1] font-bold block mb-3">
            {t("achievements_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EAF6F6] tracking-tight mb-4">
            {t("achievements_title")}
          </h2>
          <p className="text-[#6B8F94] max-w-xl font-normal text-base">
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
                        className="w-10 h-10 border border-[#1C3B42] bg-[#0A2027] flex items-center justify-center group-hover:border-[#00C2D1] transition-colors"
                      >
                        <Icon className="w-5 h-5 text-[#00C2D1]" />
                      </motion.div>
                      <div className="flex items-center gap-2">
                        {isPbGold && (
                          <span className="font-digital text-[10px] font-bold text-[#D4A017] border border-[#D4A017]/40 bg-[#0A2027] px-2 py-0.5 tracking-[0.12em]">
                            PB / GOLD MEDAL
                          </span>
                        )}
                        <span className="font-digital text-xs text-[#6B8F94] font-semibold border border-[#1C3B42] px-2.5 py-0.5 tracking-[0.08em]">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Primary Metric Callout with Count-Up in Digital LED Font */}
                    <div className="mb-6">
                      <div className={`font-digital text-3xl font-extrabold tracking-tight ${
                        isPbGold ? "text-[#D4A017] inline-block pb-1" : "text-[#00C2D1] text-chlorine-glow"
                      }`}>
                        <CountUp value={item.metric} />
                      </div>
                      {item.subMetric && (
                        <div className="font-digital text-xs text-[#6B8F94] font-medium mt-2 tracking-[0.06em]">
                          {item.subMetric}
                        </div>
                      )}
                    </div>

                    {/* Achievement Title */}
                    <h3 className="font-display text-lg font-bold text-[#EAF6F6] mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#6B8F94] font-normal leading-relaxed mb-8">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer validation tag */}
                  <div className="pt-4 border-t border-[#1C3B42] flex items-center justify-between font-digital text-[10px] uppercase font-bold tracking-[0.12em]">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        isPbGold ? "bg-[#D4A017]" : "bg-[#00C2D1]"
                      }`} />
                      <span className={isPbGold ? "text-[#D4A017] font-bold" : "text-[#00C2D1]"}>
                        {t("achievements_verified")}
                      </span>
                    </span>
                    <span className="text-[#6B8F94]">{t("achievements_label")}</span>
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
