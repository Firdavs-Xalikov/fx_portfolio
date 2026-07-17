import { useState } from "react";
import GlassCard from "../ui/GlassCard";
import { Mail, Check, Copy, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const emailAddress = "firdavs.xalikovv@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactOptions = [
    {
      name: t("contact_pochta"),
      value: emailAddress,
      icon: Mail,
      action: handleCopyEmail,
      actionLabel: copied ? t("contact_action_copied") : t("contact_action_copy"),
      actionIcon: copied ? Check : Copy,
      isCopy: true,
      color: "rgba(59, 130, 246, 0.12)",
    },
    {
      name: t("contact_telegram"),
      value: "@firdavs_xalikov",
      icon: (props: any) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.35-.96.53-1.34.52-.42-.01-1.22-.24-1.82-.44-.73-.24-1.31-.37-1.26-.78.03-.22.33-.44.89-.68 3.49-1.52 5.82-2.52 6.99-3 3.32-1.37 4.02-1.61 4.47-1.62.1.01.32.03.46.15.12.1.15.24.16.34.01.07.02.21 0 .28z" />
        </svg>
      ),
      link: "https://t.me/firdavs_xalikov",
      actionLabel: t("contact_action_message"),
      actionIcon: ArrowUpRight,
      color: "rgba(6, 182, 212, 0.12)",
    },
    {
      name: t("contact_github"),
      value: "github.com/Firdavs-Xalikov",
      icon: (props: any) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      link: "https://github.com/Firdavs-Xalikov",
      actionLabel: t("contact_action_profile"),
      actionIcon: ArrowUpRight,
      color: "rgba(226, 232, 240, 0.12)",
    },
    {
      name: t("contact_instagram"),
      value: "instagram.com/firdavs_xalikovv",
      icon: (props: any) => (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      link: "https://instagram.com/firdavs_xalikovv",
      actionLabel: t("contact_action_follow"),
      actionIcon: ArrowUpRight,
      color: "rgba(59, 130, 246, 0.12)",
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 bg-black relative overflow-hidden">
      {/* Background visual support */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-2">
            {t("contact_tag")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            {t("contact_title")}
          </h2>
          <p className="text-slate-400 max-w-md mx-auto font-light text-sm md:text-base">
            {t("contact_subtitle")}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactOptions.map((option, idx) => {
            const Icon = option.icon;
            const ActionIcon = option.actionIcon;

            const CardContent = (
              <div className="flex flex-col justify-between h-full p-8">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                      {option.name}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-lg font-medium text-white break-all mb-8 font-sans">
                    {option.value}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs border-t border-slate-900/80 pt-4">
                  <span className="text-slate-500 font-light">{t("contact_status")}</span>
                  <div className="flex items-center gap-1.5 text-blue-400 font-medium group-hover:text-white transition-colors">
                    <span>{option.actionLabel}</span>
                    <ActionIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );

            if (option.isCopy) {
              return (
                <button
                  key={`${language}-${idx}`}
                  onClick={option.action}
                  className="w-full text-left bg-transparent border-0 p-0 m-0 cursor-pointer block hover:no-underline"
                >
                  <GlassCard className="h-44 group cursor-pointer" glowColor={option.color}>
                    {CardContent}
                  </GlassCard>
                </button>
              );
            }

            return (
              <a
                key={`${language}-${idx}`}
                href={option.link}
                target={option.link !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="block hover:no-underline cursor-pointer"
              >
                <GlassCard className="h-44 group" glowColor={option.color}>
                  {CardContent}
                </GlassCard>
              </a>
            );
          })}
        </div>

        {/* Footer citation */}
        <div className="mt-24 pt-8 border-t border-slate-900 text-center">
          <p className="text-xs text-slate-600 font-light font-sans tracking-wide">
            {t("contact_footer_desc")}
          </p>
          <p className="text-[10px] text-slate-700 font-light font-sans mt-1">
            &copy; {new Date().getFullYear()} {t("contact_footer_copy")}
          </p>
        </div>

      </div>
    </section>
  );
}
