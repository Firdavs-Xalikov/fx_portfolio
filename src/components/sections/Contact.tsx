import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { Mail, Check, Copy, ArrowUpRight, Terminal } from "lucide-react";
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
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-6 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#00F0FF] font-bold block mb-3">
            // OPERATING SYSTEM TERMINAL
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 text-cyber-glow">
            ESTABLISH COMMUNICATION
          </h2>
          <p className="text-[#6B8F94] max-w-md mx-auto font-normal text-base mb-6">
            {t("contact_subtitle")}
          </p>

          {/* Live Cyber Status Bar */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00F0FF]/30 bg-[#0A0D14] font-mono text-xs text-[#6B8F94] glow-blue">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="text-[#00F0FF] font-bold">TERMINAL ONLINE</span>
            <span className="text-[#00F0FF]/30">|</span>
            <span>Tashkent, UZB {localTime ? `· ${localTime}` : ""}</span>
          </div>
        </motion.div>

        {/* Cyberpunk Terminal Command Window */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 border border-[#00F0FF]/30 bg-[#0A0D14] p-4 font-mono text-xs text-[#00F0FF]"
        >
          <div className="flex items-center gap-2 border-b border-[#00F0FF]/20 pb-3 mb-4 text-[#6B8F94]">
            <Terminal className="w-4 h-4 text-[#00F0FF]" />
            <span>bash --login firdavs@cyber-os:~</span>
          </div>
          <div className="space-y-1">
            <p>&gt; sys.connect --target=&quot;firdavs.xalikovv@gmail.com&quot;</p>
            <p className="text-[#9D00FF]">&gt; [OK] CONNECTION_ESTABLISHED // ENCRYPTION_SECURE</p>
            <p className="text-white">&gt; Select communication channel below:</p>
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
                    <span className="font-mono text-[10px] uppercase font-bold text-[#00F0FF] tracking-widest">
                      {option.name}
                    </span>
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-9 h-9 border border-[#00F0FF]/30 bg-[#050505] flex items-center justify-center group-hover:border-[#9D00FF] transition-colors glow-blue"
                    >
                      <Icon className="w-4 h-4 text-[#00F0FF]" aria-hidden="true" />
                    </motion.div>
                  </div>
                  <div className="font-display text-lg font-bold text-white break-all mb-8">
                    {option.value}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs border-t border-[#00F0FF]/20 pt-4">
                  <span className="font-mono text-[10px] text-[#6B8F94] uppercase font-semibold">
                    STATUS: READY
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#00F0FF] group-hover:text-white tracking-wider transition-colors">
                    <span>{option.actionLabel}</span>
                    <ActionIcon className="w-3.5 h-3.5 text-[#00F0FF]" aria-hidden="true" />
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
                      animate={copied && !shouldReduceMotion ? { scale: [1, 1.04, 1] } : undefined}
                      transition={{ duration: 0.2 }}
                    >
                      <GlassCard className="h-48 group cursor-pointer border-[#00F0FF]/30 hover:border-[#9D00FF]">
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
                  <GlassCard className="h-48 group border-[#00F0FF]/30 hover:border-[#9D00FF]">
                    {CardContent}
                  </GlassCard>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Citation */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-24 pt-8 border-t border-[#00F0FF]/20 text-center font-mono"
        >
          <p className="text-xs text-[#6B8F94] font-normal tracking-widest uppercase">
            Engineered with Cyberpunk HUD &amp; Futuristic Architecture.
          </p>
          <p className="text-[10px] text-[#6B8F94] font-normal mt-1 tracking-widest">
            &copy; {new Date().getFullYear()} {t("contact_footer_copy")}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
