import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Bot, Network } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const AI_MODELS = [
  {
    name: "GPT-4o PROTOCOL",
    provider: "OpenAI",
    status: "STREAMING // 120 TOKENS/SEC",
    latency: "18ms",
    useCase: "Multimodal Reasoner & Code Synthesizer",
  },
  {
    name: "CLAUDE 3.5 SONNET",
    provider: "Anthropic",
    status: "ACTIVE // HIGH PRECISION",
    latency: "22ms",
    useCase: "Complex System Architecture & Refactoring",
  },
  {
    name: "GEMINI 1.5 PRO",
    provider: "Google AI",
    status: "ONLINE // 2M CONTEXT WINDOW",
    latency: "15ms",
    useCase: "Large Codebase Retrieval & RAG Indexing",
  },
];

export default function AiLab() {
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
    <section id="ailab" className="py-28 md:py-36 px-6 border-b border-[#00F0FF]/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#9D00FF] font-bold block mb-3">
            // EXPERIMENTAL RESEARCH &amp; AI
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 text-purple-glow">
            INTERACTIVE AI LABORATORY
          </h2>
          <p className="text-[#6B8F94] max-w-xl font-normal text-base">
            Autonomous agent pipelines, LLM fine-tuning benchmarks, and real-time neural model orchestration.
          </p>
        </motion.div>

        {/* AI Models Grid */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {AI_MODELS.map((model, idx) => (
            <motion.div key={idx} variants={shouldReduceMotion ? undefined : itemVariants}>
              <GlassCard className="p-8 h-full flex flex-col justify-between border-[#9D00FF]/40 hover:border-[#00F0FF]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 border border-[#9D00FF]/40 bg-[#050505] flex items-center justify-center glow-purple">
                      <Bot className="w-5 h-5 text-[#9D00FF]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#00F0FF] border border-[#00F0FF]/30 px-2 py-0.5">
                      LATENCY: {model.latency}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] uppercase font-bold text-[#6B8F94] tracking-widest block mb-1">
                    {model.provider}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {model.name}
                  </h3>
                  
                  <div className="font-mono text-xs text-[#00F0FF] mb-4 font-bold">
                    {model.status}
                  </div>

                  <p className="text-xs text-[#6B8F94] leading-relaxed">
                    {model.useCase}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#9D00FF]/20 flex items-center justify-between font-mono text-[10px] text-[#9D00FF] uppercase font-bold">
                  <span className="flex items-center gap-1">
                    <Network className="w-3 h-3 animate-spin" /> SYNAPSE_LINK
                  </span>
                  <span>READY</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
