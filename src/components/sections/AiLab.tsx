import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const LUXURY_AI_MODELS = [
  {
    name: "GPT-4o Protocol",
    provider: "OpenAI",
    status: "Active // 120 t/s",
    latency: "18ms",
    useCase: "Multimodal Reasoning & Code Synthesis",
  },
  {
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    status: "Active // High Precision",
    latency: "22ms",
    useCase: "Complex System Architecture & Refactoring",
  },
  {
    name: "Gemini 1.5 Pro",
    provider: "Google AI",
    status: "Active // 2M Context",
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
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="ailab" className="py-32 md:py-44 px-8 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#71839A] font-medium block mb-3">
            ARTIFICIAL INTELLIGENCE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-gradient-heading tracking-tight mb-4">
            AI RESEARCH &amp; AGENT LAB
          </h2>
          <p className="text-[#A8B8CC] max-w-xl font-light text-base">
            Autonomous agent pipelines, LLM benchmarks, and neural model orchestration.
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
          {LUXURY_AI_MODELS.map((model, idx) => (
            <motion.div key={idx} variants={shouldReduceMotion ? undefined : itemVariants}>
              <GlassCard className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#71839A]">
                      {model.provider}
                    </span>
                    <span className="font-mono text-[10px] text-[#A8B8CC] border border-white/10 px-2 py-0.5 rounded-full">
                      {model.latency}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-medium text-[#D8E6F5] mb-2">
                    {model.name}
                  </h3>

                  <div className="font-sans text-xs text-[#4DA3FF] mb-4 font-medium">
                    {model.status}
                  </div>

                  <p className="text-xs text-[#A8B8CC] font-light leading-relaxed">
                    {model.useCase}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
