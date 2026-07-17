import { Compass, Cpu, TrendingUp } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

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
    <section id="goals" className="py-28 px-6 bg-black relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Top tag */}
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-6">
          {t("goals_tag")}
        </span>

        {/* Core quote statement */}
        <h2 key={language} className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-12 leading-tight">
          "{t("goals_quote")}"
        </h2>

        {/* Visual divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-16" />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {goalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            
            return (
              <div 
                key={`${language}-${idx}`}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/5 border border-blue-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-base font-bold font-display text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
