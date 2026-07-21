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
    <section id="goals" className="py-28 md:py-36 px-6 bg-[#FAFAF7] border-b border-[#E4E3DF]">
      <div className="max-w-[720px] mx-auto text-center">
        
        {/* Section tag */}
        <span className="font-mono text-xs uppercase tracking-widest text-[#1F4E79] font-bold block mb-4">
          {t("goals_tag")}
        </span>

        {/* Display quote statement */}
        <h2 key={language} className="font-display text-2xl md:text-3xl font-semibold text-[#14151A] leading-relaxed tracking-tight mb-10">
          "{t("goals_quote")}"
        </h2>

        {/* Hairline Divider */}
        <div className="w-16 h-[1px] bg-[#1F4E79] mx-auto mb-12" />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {goalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            
            return (
              <div 
                key={`${language}-${idx}`}
                className="p-6 bg-white border border-[#E4E3DF] flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 border border-[#E4E3DF] bg-[#FAFAF7] flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-[#1F4E79]" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#14151A] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#6B6B70] leading-relaxed font-normal">
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
