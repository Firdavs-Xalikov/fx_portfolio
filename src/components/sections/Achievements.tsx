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
    <section id="achievements" className="py-28 md:py-36 px-6 bg-[#FAFAF7] border-b border-[#E4E3DF]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1F4E79] font-bold block mb-3">
            {t("achievements_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#14151A] tracking-tight mb-4">
            {t("achievements_title")}
          </h2>
          <p className="text-[#6B6B70] max-w-xl font-normal text-base">
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
                className="p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Year Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 border border-[#E4E3DF] bg-[#FAFAF7] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#1F4E79]" />
                    </div>
                    <span className="font-mono text-xs text-[#6B6B70] font-semibold border border-[#E4E3DF] px-2.5 py-0.5">
                      {item.year}
                    </span>
                  </div>

                  {/* Primary Metric Callout */}
                  <div className="mb-6">
                    <div className={`font-display text-3xl font-extrabold tracking-tight text-[#14151A] ${
                      isChampagneHighlighted ? "border-b-2 border-[#C9A227] inline-block pb-1" : ""
                    }`}>
                      {item.metric}
                    </div>
                    {item.subMetric && (
                      <div className="font-mono text-xs text-[#6B6B70] font-medium mt-2">
                        {item.subMetric}
                      </div>
                    )}
                  </div>

                  {/* Achievement Title */}
                  <h3 className="font-display text-lg font-bold text-[#14151A] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#6B6B70] font-normal leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Footer validation tag */}
                <div className="pt-4 border-t border-[#E4E3DF] flex items-center justify-between font-mono text-[10px] uppercase font-bold tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      isChampagneHighlighted ? "bg-[#C9A227]" : "bg-[#1F4E79]"
                    }`} />
                    <span className={isChampagneHighlighted ? "text-[#C9A227]" : "text-[#1F4E79]"}>
                      {t("achievements_verified")}
                    </span>
                  </span>
                  <span className="text-[#6B6B70]">{t("achievements_label")}</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
