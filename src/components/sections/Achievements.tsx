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
    <section id="achievements" className="py-28 md:py-36 px-6 bg-[#0B0F18] border-b border-[#1B2130]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#2E8B74] font-bold block mb-3">
            {t("achievements_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EDEDE7] tracking-tight mb-4">
            {t("achievements_title")}
          </h2>
          <p className="text-[#8B92A0] max-w-xl font-normal text-base">
            {t("achievements_subtitle")}
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Award;
            // Sparingly highlight 1-2 key credentials with Champagne gold tag (#C9A227)
            const isChampagneHighlighted = idx === 0 || idx === 3;
            
            return (
              <GlassCard
                key={`${language}-${idx}`}
                className="p-8 flex flex-col justify-between !bg-[#05070C]"
              >
                <div>
                  {/* Badge & Year Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 border border-[#1B2130] bg-[#0B0F18] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#2E8B74]" />
                    </div>
                    <span className="font-mono text-xs text-[#8B92A0] font-semibold border border-[#1B2130] px-2.5 py-0.5">
                      {item.year}
                    </span>
                  </div>

                  {/* Primary Metric Callout */}
                  <div className="mb-6">
                    <div className={`font-display text-3xl font-extrabold tracking-tight text-[#EDEDE7] ${
                      isChampagneHighlighted ? "border-b-2 border-[#C9A227] inline-block pb-1" : ""
                    }`}>
                      {item.metric}
                    </div>
                    {item.subMetric && (
                      <div className="font-mono text-xs text-[#8B92A0] font-medium mt-2">
                        {item.subMetric}
                      </div>
                    )}
                  </div>

                  {/* Achievement Title */}
                  <h3 className="font-display text-lg font-bold text-[#EDEDE7] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#8B92A0] font-normal leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Footer validation tag */}
                <div className="pt-4 border-t border-[#1B2130] flex items-center justify-between font-mono text-[10px] uppercase font-bold tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      isChampagneHighlighted ? "bg-[#C9A227]" : "bg-[#2E8B74]"
                    }`} />
                    <span className={isChampagneHighlighted ? "text-[#C9A227]" : "text-[#2E8B74]"}>
                      {t("achievements_verified")}
                    </span>
                  </span>
                  <span className="text-[#8B92A0]">{t("achievements_label")}</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
