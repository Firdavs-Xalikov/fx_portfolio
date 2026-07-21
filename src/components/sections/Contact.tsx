import { useState } from "react";
import GlassCard from "../ui/GlassCard";
import { Mail, Check, Copy, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

import TelegramIcon from "../icons/TelegramIcon";
import GitHubIcon from "../icons/GitHubIcon";
import InstagramIcon from "../icons/InstagramIcon";

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
      icon: TelegramIcon,
      link: "https://t.me/firdavs_xalikov",
      actionLabel: t("contact_action_message"),
      actionIcon: ArrowUpRight,
      color: "rgba(6, 182, 212, 0.12)",
    },
    {
      name: t("contact_github"),
      value: "github.com/Firdavs-Xalikov",
      icon: GitHubIcon,
      link: "https://github.com/Firdavs-Xalikov",
      actionLabel: t("contact_action_profile"),
      actionIcon: ArrowUpRight,
      color: "rgba(226, 232, 240, 0.12)",
    },
    {
      name: t("contact_instagram"),
      value: "instagram.com/firdavs_xalikovv",
      icon: InstagramIcon,
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
                    <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                      {option.name}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-blue-400" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="text-lg font-medium text-white break-all mb-8 font-sans">
                    {option.value}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs border-t border-slate-900/80 pt-4">
                  <span className="text-slate-400 font-light">{t("contact_status")}</span>
                  <div className="flex items-center gap-1.5 text-blue-400 font-medium group-hover:text-white transition-colors">
                    <span>{option.actionLabel}</span>
                    <ActionIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </div>
              </div>
            );

            if (option.isCopy) {
              return (
                <button
                  key={`${language}-${idx}`}
                  onClick={option.action}
                  aria-label={`Copy email address ${option.value}`}
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
                aria-label={`Open ${option.name} link: ${option.value}`}
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
          <p className="text-xs text-slate-400 font-light font-sans tracking-wide">
            {t("contact_footer_desc")}
          </p>
          <p className="text-[10px] text-slate-400 font-light font-sans mt-1">
            &copy; {new Date().getFullYear()} {t("contact_footer_copy")}
          </p>
        </div>

      </div>
    </section>
  );
}
