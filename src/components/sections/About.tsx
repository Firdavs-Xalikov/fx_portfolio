import { User, Shield, Compass } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 md:py-36 px-6 bg-[#12161F] border-b border-[#232838]">
      <div className="max-w-[720px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#2E8B74] font-bold block mb-3">
            {t("about_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EDEDE7] tracking-tight">
            {t("about_title")}
          </h2>
        </div>

        {/* Display Pull Quote with Emerald Accent Border */}
        <div className="border-l-2 border-[#2E8B74] pl-6 my-12">
          <blockquote className="font-display font-semibold text-2xl md:text-3xl text-[#EDEDE7] leading-snug tracking-tight">
            "{t("about_quote")}"
          </blockquote>
        </div>

        {/* Narrative Biography Panel */}
        <div className="bg-[#0A0E14] border border-[#232838] p-8 mb-10 space-y-4">
          <h3 className="font-display text-lg font-bold text-[#EDEDE7] flex items-center gap-2">
            <User className="w-4 h-4 text-[#2E8B74]" />
            <span>{t("about_journey_title")}</span>
          </h3>
          <p className="text-[#8B92A0] text-base leading-relaxed font-normal">
            {t("about_journey_p1")}
          </p>
          <p className="text-[#8B92A0] text-sm leading-relaxed italic border-t border-[#232838] pt-4">
            {t("about_journey_p2")}
          </p>
        </div>

        {/* Pillars / Key Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0A0E14] border border-[#232838] p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#2E8B74] font-semibold block mb-2">
                {t("about_focus_label")}
              </span>
              <p className="font-display font-bold text-base text-[#EDEDE7]">
                {t("about_focus_val")}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#232838]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#8B92A0] block mb-2">
                {t("about_languages_label")}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Uzbek", "Russian", "English"].map((lang) => (
                  <span
                    key={lang}
                    className="font-mono text-[10px] uppercase px-2 py-0.5 border border-[#232838] bg-[#12161F] text-[#EDEDE7]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0A0E14] border border-[#232838] p-5 flex items-start gap-4">
              <Shield className="w-5 h-5 text-[#2E8B74] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-sm text-[#EDEDE7] mb-1">
                  {t("about_val1_title")}
                </h4>
                <p className="text-xs text-[#8B92A0] leading-relaxed">
                  {t("about_val1_desc")}
                </p>
              </div>
            </div>

            <div className="bg-[#0A0E14] border border-[#232838] p-5 flex items-start gap-4">
              <Compass className="w-5 h-5 text-[#2E8B74] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-sm text-[#EDEDE7] mb-1">
                  {t("about_val2_title")}
                </h4>
                <p className="text-xs text-[#8B92A0] leading-relaxed">
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
