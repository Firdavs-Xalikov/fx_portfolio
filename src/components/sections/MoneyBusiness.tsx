import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { TrendingUp, Wallet, Coins, BarChart3 } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const BUSINESS_METRICS = [
  {
    title: "DIGITAL LOGISTICS DISPATCH",
    value: "HIGH-VOLUME",
    subtext: "Operational route optimization & cargo logistics",
    icon: Wallet,
  },
  {
    title: "INT'L FINANCE ACADEMY",
    value: "105.1 SCORE",
    subtext: "Admitted into International Finance Lyceum",
    icon: TrendingUp,
  },
  {
    title: "COMMERCIAL SAAS PRODUCTS",
    value: "FULL-STACK AI",
    subtext: "Monetizable web applications & AI services",
    icon: Coins,
  },
];

export default function MoneyBusiness() {
  const shouldReduceMotion = useReducedMotion();

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
    <section id="business" className="py-28 md:py-36 px-6 border-b border-[#00F0FF]/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#FFD700] font-bold block mb-3">
            // DIGITAL ECONOMY &amp; VENTURES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            MONEY &amp; DIGITAL BUSINESS
          </h2>
          <p className="text-[#6B8F94] max-w-xl font-normal text-base">
            Financial analytics, logistics operations, and scalable digital product economics.
          </p>
        </motion.div>

        {/* Business Metrics Grid */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {BUSINESS_METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            
            return (
              <motion.div key={idx} variants={shouldReduceMotion ? undefined : itemVariants}>
                <GlassCard className="p-8 h-full flex flex-col justify-between border-[#FFD700]/30 hover:border-[#00F0FF]">
                  <div>
                    <div className="w-10 h-10 border border-[#FFD700]/40 bg-[#050505] flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-[#FFD700]" />
                    </div>

                    <span className="font-mono text-[10px] uppercase font-bold text-[#6B8F94] tracking-widest block mb-2">
                      {metric.title}
                    </span>
                    
                    <div className="font-display text-2xl font-bold text-[#FFD700] mb-3">
                      {metric.value}
                    </div>

                    <p className="text-xs text-[#6B8F94] leading-relaxed">
                      {metric.subtext}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#FFD700]/20 flex items-center justify-between font-mono text-[10px] text-[#FFD700] font-bold">
                    <span>FINANCIAL_NODE</span>
                    <span className="flex items-center gap-1">
                      <BarChart3 className="w-3 h-3 text-[#FFD700]" /> VERIFIED
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
