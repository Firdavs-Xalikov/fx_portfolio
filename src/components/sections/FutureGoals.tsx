import { Compass, Cpu, TrendingUp } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";

export default function FutureGoals() {
  const { t, language } = useLanguage();

  const goalPillars = [
    {
      title: t("goals_se_title"),
      description: t("goals_se_desc"),
      icon: TrendingUp,
    },
    {
      title: t("goals_global_title"),
      description: t("goals_global_desc"),
      icon: Compass,
    },
    {
      title: t("goals_tech_title"),
      description: t("goals_tech_desc"),
      icon: Cpu,
    },
  ];

  return (
    <section id="goals" className="py-28 md:py-36 px-6 border-b border-[rgba(251,245,183,0.08)]">
      <div className="max-w-[720px] mx-auto text-center">
        
        {/* Section tag */}
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#2FAF83] font-bold block mb-4">
          {t("goals_tag")}
        </span>

        {/* Display quote statement */}
        <h2 key={language} className="font-display text-2xl md:text-3xl font-semibold text-[#F5F1E8] leading-relaxed tracking-tight mb-10">
          "{t("goals_quote")}"
        </h2>

        {/* Hairline Divider */}
        <div className="w-16 h-[1px] bg-[#2FAF83] mx-auto mb-12" />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {goalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            
            return (
              <div 
                key={`${language}-${idx}`}
                className="p-6 bg-[#0A0F19] border border-[rgba(251,245,183,0.08)] flex flex-col justify-between transition-all duration-300 hover:border-[rgba(251,245,183,0.25)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
              >
                <div>
                  <div className="w-8 h-8 border border-[rgba(251,245,183,0.08)] bg-[#05070C] flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-[#2FAF83]" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#F5F1E8] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#9198A5] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
