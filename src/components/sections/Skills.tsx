import GlassCard from "../ui/GlassCard";
import { useLanguage } from "../../context/useLanguage";
import { SKILLS_CATEGORIES } from "../../data/skills";

export default function Skills() {
  const { t, language } = useLanguage();

  const categories = SKILLS_CATEGORIES.map((cat) => ({
    title: t(cat.titleKey),
    description: t(cat.descriptionKey),
    icon: cat.icon,
    skills: cat.skills.map((s) => ({
      name: s.name[language] || s.name["en"],
    })),
  }));

  return (
    <section id="skills" className="py-28 md:py-36 px-6 bg-[#0B0F18] border-b border-[#1B2130]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#2E8B74] font-bold block mb-3">
            {t("skills_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EDEDE7] tracking-tight mb-4">
            {t("skills_title")}
          </h2>
          <p className="text-[#8B92A0] max-w-xl font-normal text-base">
            {t("skills_subtitle")}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            
            return (
              <GlassCard
                key={`${language}-${idx}`}
                className="p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 border border-[#1B2130] bg-[#05070C] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#2E8B74]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#EDEDE7]">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#8B92A0] mb-8 font-normal leading-relaxed min-h-[40px]">
                    {category.description}
                  </p>

                  {/* Skill Chips in Mono */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-xs border border-[#1B2130] bg-[#05070C] text-[#EDEDE7] px-2.5 py-1"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom detail footer */}
                <div className="mt-10 pt-4 border-t border-[#1B2130] flex items-center justify-between font-mono text-[10px] text-[#8B92A0] uppercase font-bold tracking-wider">
                  <span>{t("skills_domain")}</span>
                  <span className="text-[#2E8B74]">{t("skills_active")}</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
