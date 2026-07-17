import GlassCard from "../ui/GlassCard";
import { User, Shield, Target, Compass } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 px-6 bg-black relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-2">
              {t("about_tag")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
              {t("about_title")}
            </h2>
          </div>
          <p className="text-slate-400 max-w-md font-light text-sm md:text-base">
            {t("about_subtitle")}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual Bio / Statement Card */}
          <div className="lg:col-span-5 h-full">
            <GlassCard className="p-8 h-full flex flex-col justify-between" glowColor="rgba(59,130,246,0.1)">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white leading-tight mb-6">
                  "{t("about_quote")}"
                </h3>
              </div>
              
              <div className="border-t border-slate-800/80 pt-6 mt-8 flex flex-col gap-4">
                <div>
                  <div className="text-xs text-slate-400 mb-1">{t("about_focus_label")}</div>
                  <div className="text-white font-medium text-base">{t("about_focus_val")}</div>
                </div>
                <div className="border-t border-slate-900/60 pt-4">
                  <div className="text-xs text-slate-400 mb-2">{t("about_languages_label")}</div>
                  <div className="flex gap-2">
                    {["Uzbek", "Russian", "English"].map((lang) => (
                      <span key={lang} className="px-2.5 py-1 rounded-lg text-[10px] font-medium tracking-wide bg-blue-500/5 border border-blue-500/15 text-blue-400">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Bio Paragraph & Core Values */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="glass-card p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-400" />
                <span>{t("about_journey_title")}</span>
              </h4>
              <p className="text-slate-300 leading-relaxed font-light text-base mb-6">
                {t("about_journey_p1")}
              </p>
              <p className="text-slate-400 leading-relaxed font-light text-sm italic">
                {t("about_journey_p2")}
              </p>
            </div>

            {/* Micro value items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.01]">
                <div className="w-10 h-10 rounded-lg bg-blue-500/5 border border-blue-500/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h5 className="font-semibold text-white text-sm mb-1">{t("about_val1_title")}</h5>
                  <p className="text-xs text-slate-400 leading-normal">{t("about_val1_desc")}</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.01]">
                <div className="w-10 h-10 rounded-lg bg-blue-500/5 border border-blue-500/10 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h5 className="font-semibold text-white text-sm mb-1">{t("about_val2_title")}</h5>
                  <p className="text-xs text-slate-400 leading-normal">{t("about_val2_desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
