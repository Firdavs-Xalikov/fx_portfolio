import GlassCard from "../ui/GlassCard";
import { useLanguage } from "../../context/LanguageContext";
import { SKILLS_CATEGORIES } from "../../data/skills";

export default function Skills() {
  const { t, language } = useLanguage();

  const categories = SKILLS_CATEGORIES.map((cat) => ({
    title: t(cat.titleKey),
    description: t(cat.descriptionKey),
    icon: cat.icon,
    accentColor: cat.accentColor,
    skills: cat.skills.map((s) => ({
      name: s.name[language] || s.name["en"],
    })),
  }));

  return (
    <section id="skills" className="py-28 px-6 bg-black relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-blue-500/5 blur-[130px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-2">
            {t("skills_tag")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            {t("skills_title")}
          </h2>
          <p className="text-slate-400 max-w-xl font-light text-sm md:text-base">
            {t("skills_subtitle")}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            
            return (
              <GlassCard
                key={`${language}-${idx}`}
                className="p-8 flex flex-col justify-between"
                glowColor={category.accentColor}
                delay={idx * 0.1}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 mb-8 font-light leading-relaxed min-h-[48px]">
                    {category.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3.5 py-2 rounded-xl text-xs font-light text-slate-300 border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 hover:text-white transition-all cursor-default"
                      >
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom detail footer */}
                <div className="mt-12 pt-6 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                  <span>{t("skills_domain")}</span>
                  <span className="text-blue-400/80">{t("skills_active")}</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
