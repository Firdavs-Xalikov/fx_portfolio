import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { Mail, Check, Copy, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";

import TelegramIcon from "../icons/TelegramIcon";
import GitHubIcon from "../icons/GitHubIcon";
import InstagramIcon from "../icons/InstagramIcon";

export default function Contact() {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
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

  // Staggered reveal variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-6 bg-midnight-gradient">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#2FAF83] font-bold block mb-3">
            {t("contact_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F5F1E8] tracking-tight mb-4">
            {t("contact_title")}
          </h2>
          <p className="text-[#9198A5] max-w-md mx-auto font-normal text-base">
            {t("contact_subtitle")}
          </p>
        </motion.div>

        {/* Contact Cards Grid with Staggered Scroll Entrance */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {contactOptions.map((option, idx) => {
            const Icon = option.icon;
            const ActionIcon = option.actionIcon;

            const CardContent = (
              <div className="flex flex-col justify-between h-full p-8">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#2FAF83] tracking-[0.12em]">
                      {option.name}
                    </span>
                    <div className="w-8 h-8 border border-[rgba(251,245,183,0.08)] bg-[#05070C] flex items-center justify-center group-hover:border-[#2FAF83] transition-colors">
                      <Icon className="w-4 h-4 text-[#2FAF83]" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="font-display text-lg font-bold text-[#F5F1E8] break-all mb-8">
                    {option.value}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs border-t border-[rgba(251,245,183,0.08)] pt-4">
                  <span className="font-mono text-[10px] text-[#9198A5] uppercase font-semibold tracking-[0.12em]">{t("contact_status")}</span>
                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#2FAF83] group-hover:underline tracking-[0.08em]">
                    <span>{option.actionLabel}</span>
                    <ActionIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </div>
              </div>
            );

            if (option.isCopy) {
              return (
                <motion.div key={`${language}-${idx}`} variants={shouldReduceMotion ? undefined : itemVariants}>
                  <button
                    onClick={option.action}
                    aria-label={`Copy email address ${option.value}`}
                    className="w-full text-left bg-transparent border-0 p-0 m-0 cursor-pointer block hover:no-underline"
                  >
                    <GlassCard className="h-48 group cursor-pointer">
                      {CardContent}
                    </GlassCard>
                  </button>
                </motion.div>
              );
            }

            return (
              <motion.div key={`${language}-${idx}`} variants={shouldReduceMotion ? undefined : itemVariants}>
                <a
                  href={option.link}
                  target={option.link !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  aria-label={`Open ${option.name} link: ${option.value}`}
                  className="block hover:no-underline cursor-pointer"
                >
                  <GlassCard className="h-48 group">
                    {CardContent}
                  </GlassCard>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer citation */}
        <div className="mt-24 pt-8 border-t border-[rgba(251,245,183,0.08)] text-center font-mono">
          <p className="text-xs text-[#9198A5] font-normal tracking-[0.08em]">
            Designed &amp; Engineered with Swiss-Apple Luxury Aesthetics.
          </p>
          <p className="text-[10px] text-[#9198A5] font-normal mt-1 tracking-[0.08em]">
            &copy; {new Date().getFullYear()} {t("contact_footer_copy")}
          </p>
        </div>

      </div>
    </section>
  );
}
