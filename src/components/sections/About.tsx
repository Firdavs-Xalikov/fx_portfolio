import { User, Shield, Compass } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 md:py-36 px-6 bg-midnight-gradient border-b border-[rgba(251,245,183,0.08)]">
      <div className="max-w-[720px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#2FAF83] font-bold block mb-3">
            {t("about_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F5F1E8] tracking-tight">
            {t("about_title")}
          </h2>
        </div>

        {/* Display Pull Quote with Jewel Emerald Accent Border */}
        <div className="border-l-2 border-[#2FAF83] pl-6 my-12">
          <blockquote className="font-display font-semibold text-2xl md:text-3xl text-[#F5F1E8] leading-snug tracking-tight">
            "{t("about_quote")}"
          </blockquote>
        </div>

        {/* Narrative Biography Panel */}
        <div className="bg-[#0A0F19] border border-[rgba(251,245,183,0.08)] p-8 mb-10 space-y-4">
          <h3 className="font-display text-lg font-bold text-[#F5F1E8] flex items-center gap-2">
            <User className="w-4 h-4 text-[#2FAF83]" />
            <span>{t("about_journey_title")}</span>
          </h3>
          <p className="text-[#9198A5] text-base leading-relaxed font-normal">
            {t("about_journey_p1")}
          </p>
          <p className="text-[#9198A5] text-sm leading-relaxed italic border-t border-[rgba(251,245,183,0.08)] pt-4">
            {t("about_journey_p2")}
          </p>
        </div>

        {/* Pillars / Key Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0A0F19] border border-[rgba(251,245,183,0.08)] p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#2FAF83] font-semibold block mb-2">
                {t("about_focus_label")}
              </span>
              <p className="font-display font-bold text-base text-[#F5F1E8]">
                {t("about_focus_val")}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[rgba(251,245,183,0.08)]">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#9198A5] block mb-2">
                {t("about_languages_label")}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Uzbek", "Russian", "English"].map((lang) => (
                  <span
                    key={lang}
                    className="font-mono text-[10px] uppercase px-2 py-0.5 border border-[rgba(251,245,183,0.08)] bg-[#0D131F] text-[#F5F1E8]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0A0F19] border border-[rgba(251,245,183,0.08)] p-5 flex items-start gap-4">
              <Shield className="w-5 h-5 text-[#2FAF83] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-sm text-[#F5F1E8] mb-1">
                  {t("about_val1_title")}
                </h4>
                <p className="text-xs text-[#9198A5] leading-relaxed">
                  {t("about_val1_desc")}
                </p>
              </div>
            </div>

            <div className="bg-[#0A0F19] border border-[rgba(251,245,183,0.08)] p-5 flex items-start gap-4">
              <Compass className="w-5 h-5 text-[#2FAF83] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-sm text-[#F5F1E8] mb-1">
                  {t("about_val2_title")}
                </h4>
                <p className="text-xs text-[#9198A5] leading-relaxed">
                  {t("about_val2_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
