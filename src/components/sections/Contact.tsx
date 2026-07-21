import { useState } from "react";
import GlassCard from "../ui/GlassCard";
import { Mail, Check, Copy, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";

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
    },
    {
      name: t("contact_telegram"),
      value: "@firdavs_xalikov",
      icon: TelegramIcon,
      link: "https://t.me/firdavs_xalikov",
      actionLabel: t("contact_action_message"),
      actionIcon: ArrowUpRight,
    },
    {
      name: t("contact_github"),
      value: "github.com/Firdavs-Xalikov",
      icon: GitHubIcon,
      link: "https://github.com/Firdavs-Xalikov",
      actionLabel: t("contact_action_profile"),
      actionIcon: ArrowUpRight,
    },
    {
      name: t("contact_instagram"),
      value: "instagram.com/firdavs_xalikovv",
      icon: InstagramIcon,
      link: "https://instagram.com/firdavs_xalikovv",
      actionLabel: t("contact_action_follow"),
      actionIcon: ArrowUpRight,
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-36 px-6 bg-[#0B0F18]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#2E8B74] font-bold block mb-3">
            {t("contact_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EDEDE7] tracking-tight mb-4">
            {t("contact_title")}
          </h2>
          <p className="text-[#8B92A0] max-w-md mx-auto font-normal text-base">
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
                    <span className="font-mono text-[10px] uppercase font-bold text-[#2E8B74] tracking-wider">
                      {option.name}
                    </span>
                    <div className="w-8 h-8 border border-[#1B2130] bg-[#0B0F18] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#2E8B74]" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="font-display text-lg font-bold text-[#EDEDE7] break-all mb-8">
                    {option.value}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs border-t border-[#1B2130] pt-4">
                  <span className="font-mono text-[10px] text-[#8B92A0] uppercase font-semibold">{t("contact_status")}</span>
                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#2E8B74] group-hover:underline">
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
                  <GlassCard className="h-48 group cursor-pointer !bg-[#05070C]">
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
                <GlassCard className="h-48 group !bg-[#05070C]">
                  {CardContent}
                </GlassCard>
              </a>
            );
          })}
        </div>

        {/* Footer citation */}
        <div className="mt-24 pt-8 border-t border-[#1B2130] text-center font-mono">
          <p className="text-xs text-[#8B92A0] font-normal tracking-wide">
            Designed &amp; Engineered with Swiss-Apple Dark Minimalism.
          </p>
          <p className="text-[10px] text-[#8B92A0] font-normal mt-1">
            &copy; {new Date().getFullYear()} {t("contact_footer_copy")}
          </p>
        </div>

      </div>
    </section>
  );
}
