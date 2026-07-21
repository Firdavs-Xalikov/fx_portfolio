import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { useLanguage } from "../../context/useLanguage";
import { SKILLS_CATEGORIES } from "../../data/skills";

export default function Skills() {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const categories = SKILLS_CATEGORIES.map((cat) => ({
    title: t(cat.titleKey),
    description: t(cat.descriptionKey),
    icon: cat.icon,
    skills: cat.skills.map((s) => ({
      name: s.name[language] || s.name["en"],
    })),
  }));

  // Staggered reveal variants for category grid
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  // Staggered reveal variants for skill chips inside each card
  const chipContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const chipVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-28 md:py-36 px-6 border-b border-[#1C3B42]">
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
            {t("skills_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EAF6F6] tracking-tight mb-4">
            {t("skills_title")}
          </h2>
          <p className="text-[#6B8F94] max-w-xl font-normal text-base">
            {t("skills_subtitle")}
          </p>
        </motion.div>

        {/* Categories Grid with Staggered Entrance */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, idx) => {
            const Icon = category.icon;
            
            return (
              <motion.div key={`${language}-${idx}`} variants={shouldReduceMotion ? undefined : cardVariants}>
                <GlassCard className="p-8 flex flex-col justify-between h-full group">
                  <div>
                    {/* Category Header with Hover Icon Micro-Interaction */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.12 }}
                        transition={{ duration: 0.15 }}
                        className="w-9 h-9 border border-[#1C3B42] bg-[#0A2027] flex items-center justify-center shrink-0 group-hover:border-[#00C2D1] transition-colors"
                      >
                        <Icon className="w-4 h-4 text-[#00C2D1]" />
                      </motion.div>
                      <h3 className="font-display text-lg font-bold text-[#EAF6F6]">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#6B8F94] mb-8 font-normal leading-relaxed min-h-[40px]">
                      {category.description}
                    </p>

                    {/* Skill Chips in Mono with Stagger & Lift Micro-Interaction */}
                    <motion.div
                      variants={shouldReduceMotion ? undefined : chipContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {category.skills.map((skill, sIdx) => (
                        <motion.span
                          key={sIdx}
                          variants={shouldReduceMotion ? undefined : chipVariants}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  y: -2,
                                  borderColor: "#00C2D1",
                                  backgroundColor: "#0A2027",
                                }
                          }
                          transition={{ duration: 0.15 }}
                          className="font-digital text-xs border border-[#1C3B42] bg-[#0A2027] text-[#EAF6F6] px-2.5 py-1 tracking-[0.06em] cursor-default transition-colors"
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Bottom detail footer with animated ACTIVE status pulse */}
                  <div className="mt-10 pt-4 border-t border-[#1C3B42] flex items-center justify-between font-digital text-[10px] text-[#6B8F94] uppercase font-bold tracking-[0.12em]">
                    <span>{t("skills_domain")}</span>
                    <div className="flex items-center gap-1.5">
                      <motion.span
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : { opacity: [0.4, 1, 0.4] }
                        }
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 rounded-full bg-[#00C2D1]"
                      />
                      <span className="text-[#00C2D1]">{t("skills_active")}</span>
                    </div>
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
