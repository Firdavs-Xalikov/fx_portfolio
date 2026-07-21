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
  const achievements = t("achievements_list") as Achievement[];

  return (
    <section id="achievements" className="py-28 md:py-36 px-6 bg-midnight-gradient border-b border-[rgba(251,245,183,0.08)]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#2FAF83] font-bold block mb-3">
            {t("achievements_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F5F1E8] tracking-tight mb-4">
            {t("achievements_title")}
          </h2>
          <p className="text-[#9198A5] max-w-xl font-normal text-base">
            {t("achievements_subtitle")}
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Award;
            const isGoldHighlighted = idx === 0 || idx === 3;
            
            return (
              <GlassCard
                key={`${language}-${idx}`}
                className="p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Year Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 border border-[rgba(251,245,183,0.08)] bg-[#05070C] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#2FAF83]" />
                    </div>
                    <span className="font-mono text-xs text-[#9198A5] font-semibold border border-[rgba(251,245,183,0.08)] px-2.5 py-0.5 tracking-[0.08em]">
                      {item.year}
                    </span>
                  </div>

                  {/* Primary Metric Callout with Count-Up and Gold Text-Fill */}
                  <div className="mb-6">
                    <div className={`font-display text-3xl font-extrabold tracking-tight ${
                      isGoldHighlighted ? "text-gold-gradient inline-block pb-1" : "text-[#F5F1E8]"
                    }`}>
                      <CountUp value={item.metric} />
                    </div>
                    {item.subMetric && (
                      <div className="font-mono text-xs text-[#9198A5] font-medium mt-2 tracking-[0.06em]">
                        {item.subMetric}
                      </div>
                    )}
                  </div>

                  {/* Achievement Title */}
                  <h3 className="font-display text-lg font-bold text-[#F5F1E8] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#9198A5] font-normal leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Footer validation tag */}
                <div className="pt-4 border-t border-[rgba(251,245,183,0.08)] flex items-center justify-between font-mono text-[10px] uppercase font-bold tracking-[0.12em]">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      isGoldHighlighted ? "bg-[#BF9B30]" : "bg-[#2FAF83]"
                    }`} />
                    <span className={isGoldHighlighted ? "text-gold-gradient font-bold" : "text-[#2FAF83]"}>
                      {t("achievements_verified")}
                    </span>
                  </span>
                  <span className="text-[#9198A5]">{t("achievements_label")}</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
