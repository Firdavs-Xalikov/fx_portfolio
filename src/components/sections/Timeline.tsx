import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { 
  BookOpen, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Activity, 
  FileCheck, 
  Sparkles,
  Trophy 
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { useLanguage } from "../../context/LanguageContext";

const iconMap: Record<string, any> = {
  Activity,
  BookOpen,
  FileCheck,
  GraduationCap,
  Briefcase,
  Trophy,
  Sparkles,
  Award,
};

interface TimelineEvent {
  year: string;
  title: string;
  category: "it" | "academic" | "personal" | "sports";
  description: string;
  details: string[];
  iconName: string;
}

export default function Timeline() {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const timelineEvents = t("timeline_events") as TimelineEvent[];

  const filteredEvents = selectedCategory === "all"
    ? timelineEvents
    : timelineEvents.filter(e => e.category === selectedCategory);

  // Scroll tracking for progress bar
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const progressTransform = useTransform(scaleY, [0.15, 0.85], ["0%", "100%"]);

  return (
    <section id="journey" className="py-28 px-6 bg-black relative overflow-hidden" ref={containerRef}>
      {/* Background ambient lighting */}
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-2">
              {t("journey_tag")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
              {t("journey_title")}
            </h2>
          </div>

          {/* Timeline Category Filters */}
          <div className="flex flex-wrap gap-2 bg-slate-900/40 p-1.5 rounded-xl border border-white/5">
            {[
              { id: "all", label: t("journey_all") },
              { id: "academic", label: t("journey_academic") },
              { id: "it", label: t("journey_it") },
              { id: "sports", label: t("journey_sports") }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                aria-label={`Filter timeline by ${cat.label}`}
                className={`px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-white text-black font-semibold"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Path Container */}
        <div className="relative mt-24">
          
          {/* Vertical central spine line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-[1px] hidden md:block" />
          
          {/* Active colored scrolling track overlay */}
          <motion.div 
            style={{ height: progressTransform, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-blue-500 to-cyan-500 -translate-x-[1px] hidden md:block"
          />

          {/* Timeline events loop */}
          <div className="space-y-12">
            {filteredEvents.map((event, idx) => {
              const Icon = iconMap[event.iconName] || BookOpen;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={`${language}-${idx}`}
                  className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing central node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center z-20 group-hover:border-blue-500 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                    <Icon className="w-3.5 h-3.5 text-slate-400" />
                  </div>

                  {/* Date Flag */}
                  <div className={`pl-12 md:pl-0 w-full md:w-1/2 flex mb-2 md:mb-0 ${
                    isEven ? "md:justify-start md:pl-16" : "md:justify-end md:pr-16"
                  }`}>
                    <span className="text-xl font-bold font-display text-blue-400 tracking-wider">
                      {event.year}
                    </span>
                  </div>

                  {/* Detail Glass Card */}
                  <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                    isEven ? "md:pr-16" : "md:pl-16"
                  }`}>
                    <GlassCard 
                      className="p-6 md:p-8" 
                      glowColor={
                        event.category === "it" 
                          ? "rgba(6, 182, 212, 0.08)" 
                          : "rgba(59, 130, 246, 0.08)"
                      }
                    >
                      <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider mb-3 ${
                        event.category === "it" 
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                          : event.category === "sports"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      }`}>
                        {event.category === "it" ? "IT / Development" : event.category}
                      </span>
                      
                      <h3 className="text-xl font-bold font-display text-white mb-2">
                        {event.title}
                      </h3>
                      
                      <p className="text-sm text-slate-300 mb-4 font-light">
                        {event.description}
                      </p>

                      <ul className="space-y-2 border-t border-slate-800/80 pt-4">
                        {event.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 mt-1.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
