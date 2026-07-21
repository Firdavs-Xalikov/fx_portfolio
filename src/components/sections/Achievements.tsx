import GlassCard from "../ui/GlassCard";
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
  const achievements = t("achievements_list") as Achievement[];

  return (
    <section id="achievements" className="py-28 px-6 bg-black relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-2">
            {t("achievements_tag")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            {t("achievements_title")}
          </h2>
          <p className="text-slate-400 max-w-xl font-light text-sm md:text-base">
            {t("achievements_subtitle")}
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Award;
            
            return (
              <GlassCard
                key={`${language}-${idx}`}
                className="p-8 flex flex-col justify-between"
                glowColor={
                  item.category === "it" 
                    ? "rgba(6, 182, 212, 0.12)" 
                    : item.category === "athletics"
                    ? "rgba(16, 185, 129, 0.12)"
                    : "rgba(59, 130, 246, 0.12)"
                }
                delay={idx * 0.1}
              >
                <div>
                  {/* Badge & Year Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-xs font-semibold font-display text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-white/5">
                      {item.year}
                    </span>
                  </div>

                  {/* Primary Metric Callout */}
                  <div className="mb-6">
                    <div className="text-3xl font-extrabold tracking-tight font-display text-white">
                      {item.metric}
                    </div>
                    {item.subMetric && (
                      <div className="text-xs text-slate-400 font-light mt-1">
                        {item.subMetric}
                      </div>
                    )}
                  </div>

                  {/* Achievement Title */}
                  <h3 className="text-lg font-bold font-display text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 font-light leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Footer validation */}
                <div className="pt-6 border-t border-slate-900/80 flex items-center justify-between text-[9px] text-slate-500 uppercase tracking-widest font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {t("achievements_verified")}
                  </span>
                  <span>{t("achievements_label")}</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
