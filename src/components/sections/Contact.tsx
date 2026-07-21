import { useState, useEffect } from "react";
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
  const [localTime, setLocalTime] = useState("");
  const emailAddress = "firdavs.xalikovv@gmail.com";

  // Live Tashkent local time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Tashkent",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLocalTime(now.toLocaleTimeString("en-GB", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-6 bg-[#0A2027]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center mb-20"
        >
          <span className="font-digital text-xs uppercase tracking-[0.12em] text-[#00C2D1] font-bold block mb-3">
            {t("contact_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EAF6F6] tracking-tight mb-4">
            {t("contact_title")}
          </h2>
          <p className="text-[#6B8F94] max-w-md mx-auto font-normal text-base mb-6">
            {t("contact_subtitle")}
          </p>

          {/* Live Tashkent Local Time & Availability Status Bar */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#1C3B42] bg-[#0F2830] font-digital text-xs text-[#6B8F94] tracking-[0.08em]">
            <motion.span
              animate={shouldReduceMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-[#00C2D1] glow-chlorine"
            />
            <span className="text-[#00C2D1] font-bold">STATUS: AVAILABLE</span>
            <span className="text-[#1C3B42]">|</span>
            <span>Tashkent, UZB {localTime ? `· ${localTime}` : ""}</span>
          </div>
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
                    <span className="font-digital text-[10px] uppercase font-bold text-[#00C2D1] tracking-[0.12em]">
                      {option.name}
                    </span>
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.12 }}
                      transition={{ duration: 0.15 }}
                      className="w-9 h-9 border border-[#1C3B42] bg-[#0A2027] flex items-center justify-center group-hover:border-[#00C2D1] transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#00C2D1]" aria-hidden="true" />
                    </motion.div>
                  </div>
                  <div className="font-display text-lg font-bold text-[#EAF6F6] break-all mb-8">
                    {option.value}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs border-t border-[#1C3B42] pt-4">
                  <span className="font-digital text-[10px] text-[#6B8F94] uppercase font-semibold tracking-[0.12em]">
                    {t("contact_status")}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#00C2D1] group-hover:underline tracking-[0.08em] transition-colors">
                    <span>{option.actionLabel}</span>
                    <ActionIcon className="w-3.5 h-3.5 text-[#00C2D1]" aria-hidden="true" />
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
                    <motion.div
                      animate={copied && !shouldReduceMotion ? { scale: [1, 1.03, 1] } : undefined}
                      transition={{ duration: 0.2 }}
                    >
                      <GlassCard className="h-48 group cursor-pointer">
                        {CardContent}
                      </GlassCard>
                    </motion.div>
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

        {/* Footer Citation */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-24 pt-8 border-t border-[#1C3B42] text-center font-digital"
        >
          <p className="text-xs text-[#6B8F94] font-normal tracking-[0.12em]">
            Engineered with Swimming Instrumentation Aesthetics.
          </p>
          <p className="text-[10px] text-[#6B8F94] font-normal mt-1 tracking-[0.08em]">
            &copy; {new Date().getFullYear()} {t("contact_footer_copy")}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
