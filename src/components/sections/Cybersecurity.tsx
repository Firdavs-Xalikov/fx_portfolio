import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Shield, Lock, Radio, Server, Activity } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const CYBER_METRICS = [
  {
    label: "FIREWALL STATUS",
    value: "ACTIVE // 0 THREATS",
    icon: Shield,
    color: "text-[#00F0FF]",
  },
  {
    label: "PACKET INSPECTION",
    value: "256-BIT ENCRYPTED",
    icon: Lock,
    color: "text-[#9D00FF]",
  },
  {
    label: "NETWORK SCANNER",
    value: "RADAR ONLINE",
    icon: Radio,
    color: "text-[#00F0FF]",
  },
  {
    label: "SERVER SECURITY",
    value: "HARDENED LINUX",
    icon: Server,
    color: "text-[#9D00FF]",
  },
];

export default function Cybersecurity() {
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
    <section id="cyber" className="py-28 md:py-36 px-6 border-b border-[#00F0FF]/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#00F0FF] font-bold block mb-3">
            // DEFENSIVE CYBER OPERATIONS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            CYBERSECURITY COMMAND CENTER
          </h2>
          <p className="text-[#6B8F94] max-w-xl font-normal text-base">
            Real-time threat monitoring, packet inspection, network security protocols, and system hardening.
          </p>
        </motion.div>

        {/* Command Center Telemetry Grid */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CYBER_METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            
            return (
              <motion.div key={idx} variants={shouldReduceMotion ? undefined : itemVariants}>
                <GlassCard className="p-6 h-full flex flex-col justify-between border-[#00F0FF]/30 hover:border-[#9D00FF]">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 border border-[#00F0FF]/40 bg-[#050505] flex items-center justify-center glow-blue">
                        <Icon className={`w-4 h-4 ${metric.color}`} />
                      </div>
                      <Activity className="w-4 h-4 text-[#00F0FF] animate-pulse" />
                    </div>

                    <span className="font-mono text-[10px] uppercase font-bold text-[#6B8F94] tracking-widest block mb-2">
                      {metric.label}
                    </span>
                    
                    <div className={`font-mono text-sm font-bold ${metric.color}`}>
                      {metric.value}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#00F0FF]/20 font-mono text-[10px] text-[#6B8F94] flex items-center justify-between">
                    <span>SECTOR_07</span>
                    <span className="text-[#00F0FF] font-bold">SECURE</span>
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
