import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
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
import { useLanguage } from "../../context/useLanguage";

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
  const shouldReduceMotion = useReducedMotion();

  const timelineEvents = t("timeline_events") as TimelineEvent[];

  const filteredEvents = selectedCategory === "all"
    ? timelineEvents
    : timelineEvents.filter(e => e.category === selectedCategory);

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
    <section
      id="journey"
      className="py-28 md:py-36 px-6 bg-[#FAFAF7] border-b border-[#E4E3DF] relative"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#1F4E79] font-bold block mb-3">
              {t("journey_tag")}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#14151A] tracking-tight">
              {t("journey_title")}
            </h2>
          </div>

          {/* Timeline Category Filters */}
          <div className="flex flex-wrap gap-2">
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
                className={`font-mono text-xs uppercase px-3.5 py-1.5 border transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#1F4E79] text-white border-[#1F4E79] font-bold"
                    : "bg-white text-[#6B6B70] border-[#E4E3DF] hover:border-[#14151A] hover:text-[#14151A]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lane-Line-as-Spine Container */}
        <div className="relative mt-12">
          
          {/* Central Track Rule (Lane Line Motif) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#E4E3DF] -translate-x-[0.5px] hidden md:block" />
          
          {/* Sapphire Active Progress Overlay Line */}
          <motion.div 
            style={shouldReduceMotion ? undefined : { height: progressTransform, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-[#1F4E79] -translate-x-[1px] hidden md:block"
          />

          {/* Timeline Events List */}
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
                  {/* Turn Marker Node on Spine */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-2 border-[#1F4E79] flex items-center justify-center z-20 shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[#1F4E79]" />
                  </div>

                  {/* Mono Date Flag */}
                  <div className={`pl-12 md:pl-0 w-full md:w-1/2 flex mb-2 md:mb-0 ${
                    isEven ? "md:justify-start md:pl-16" : "md:justify-end md:pr-16"
                  }`}>
                    <span className="font-mono text-sm md:text-base font-bold text-[#1F4E79] tracking-wider">
                      {event.year}
                    </span>
                  </div>

                  {/* Detail Panel */}
                  <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                    isEven ? "md:pr-16" : "md:pl-16"
                  }`}>
                    <GlassCard className="p-6 md:p-8">
                      <span className="inline-block font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 border border-[#E4E3DF] bg-[#FAFAF7] text-[#1F4E79] mb-4">
                        {event.category === "it" ? "IT / Development" : event.category}
                      </span>
                      
                      <h3 className="font-display text-xl font-bold text-[#14151A] mb-2 tracking-tight">
                        {event.title}
                      </h3>
                      
                      <p className="text-sm text-[#6B6B70] mb-4 leading-relaxed font-normal">
                        {event.description}
                      </p>

                      <ul className="space-y-2 border-t border-[#E4E3DF] pt-4">
                        {event.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs text-[#6B6B70] flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E79] mt-1.5 shrink-0" />
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
