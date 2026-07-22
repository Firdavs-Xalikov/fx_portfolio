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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="contact" className="py-32 md:py-44 px-8 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-20"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium block mb-3">
            {t("contact_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[#F5F5F7] tracking-tight mb-4">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto font-light text-base mb-6">
            {t("contact_subtitle")}
          </p>

          {/* Live Tashkent Time Status */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-[#08111F]/60 font-sans text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for new projects</span>
            <span className="text-zinc-600">|</span>
            <span>Tashkent {localTime ? `· ${localTime}` : ""}</span>
          </div>
        </motion.div>

        {/* Contact Grid */}
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
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
                      {option.name}
                    </span>
                    <div className="w-8 h-8 border border-white/10 rounded-full bg-[#08111F] flex items-center justify-center group-hover:border-white/30 transition-colors">
                      <Icon className="w-4 h-4 text-zinc-300" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="font-display text-lg font-medium text-[#F5F5F7] break-all mb-8">
                    {option.value}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs border-t border-white/10 pt-4">
                  <span className="font-sans text-[11px] text-zinc-500 uppercase">
                    Channel
                  </span>
                  <div className="flex items-center gap-1.5 font-sans text-xs font-medium text-[#F5F5F7] group-hover:underline tracking-wide transition-colors">
                    <span>{option.actionLabel}</span>
                    <ActionIcon className="w-3.5 h-3.5 text-zinc-300" aria-hidden="true" />
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
                      animate={copied && !shouldReduceMotion ? { scale: [1, 1.02, 1] } : undefined}
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
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-28 pt-8 border-t border-white/10 text-center font-sans"
        >
          <p className="text-xs text-zinc-500 font-light tracking-widest uppercase">
            Designed with Luxury Minimalist Philosophy.
          </p>
          <p className="text-[11px] text-zinc-600 font-light mt-1 tracking-wider">
            &copy; {new Date().getFullYear()} {t("contact_footer_copy")}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
