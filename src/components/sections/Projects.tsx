import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import GlassCard from "../ui/GlassCard";
import MagneticButton from "../ui/MagneticButton";
import { useLanguage } from "../../context/useLanguage";
import GitHubIcon from "../icons/GitHubIcon";

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageWebp?: string;
  link: string;
  github?: string;
}

function ProjectImage({ project }: { project: ProjectItem }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative group overflow-hidden bg-[#05070C] border-b border-[rgba(251,245,183,0.08)] aspect-[16/9] max-h-[480px] w-full">
      {/* Skeleton loader placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-[#0A0F19]/60 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#2FAF83]/20 border-t-[#2FAF83] animate-spin" />
        </div>
      )}

      <picture>
        {project.imageWebp && <source srcSet={project.imageWebp} type="image/webp" />}
        <img
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </picture>

      {/* Minimal Live badge overlaid on image */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-[#05070C]/90 border border-[rgba(251,245,183,0.08)] z-10">
        <span className="w-2 h-2 rounded-full bg-[#2FAF83] animate-pulse" />
        <span className="font-mono text-[10px] uppercase font-bold tracking-[0.12em] text-[#2FAF83]">
          LIVE PRODUCTION
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" });

  const projects = t("projects_list") as ProjectItem[];

  // Staggered reveal variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-28 md:py-36 px-6 border-b border-[rgba(251,245,183,0.08)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#2FAF83] font-bold block mb-3">
            {t("projects_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F5F1E8] tracking-tight mb-4">
            {t("projects_title")}
          </h2>
          <p className="text-[#9198A5] max-w-xl font-normal text-base">
            {t("projects_subtitle")}
          </p>
        </motion.div>

        {/* Mobile Embla Carousel / Desktop Grid */}
        <div className="overflow-hidden md:overflow-visible" ref={emblaRef}>
          <motion.div
            variants={shouldReduceMotion ? undefined : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex md:grid md:grid-cols-1 gap-8 md:gap-12"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={`${language}-${idx}`}
                variants={shouldReduceMotion ? undefined : itemVariants}
                className="flex-[0_0_100%] min-w-0 md:flex-none"
              >
                <GlassCard className="p-0 overflow-hidden">
                  <ProjectImage project={project} />

                  {/* Project Info */}
                  <div className="p-8 md:p-10">
                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F5F1E8] tracking-tight mb-4">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-[#9198A5] font-normal leading-relaxed mb-6 max-w-3xl">
                      {project.description}
                    </p>

                    {/* Mono Tech Tag Chips with Micro-Interactions */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tIdx) => (
                        <motion.span
                          key={tIdx}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  y: -2,
                                  borderColor: "rgba(251, 245, 183, 0.25)",
                                  backgroundColor: "#0D131F",
                                }
                          }
                          transition={{ duration: 0.2 }}
                          className="font-mono text-xs border border-[rgba(251,245,183,0.08)] bg-[#05070C] text-[#9198A5] px-2.5 py-1 tracking-[0.06em] cursor-default transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons with Magnetic Pull */}
                    <div className="flex items-center gap-4 pt-6 border-t border-[rgba(251,245,183,0.08)]">
                      <MagneticButton ariaLabel={`Visit live website for ${project.title}`}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-jewel-emerald text-[#F5F1E8] font-mono text-xs font-semibold uppercase tracking-[0.12em] hover:opacity-90 transition-opacity cursor-pointer shadow-[0_0_12px_rgba(47,175,131,0.2)]"
                        >
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                          <span>{t("projects_visit")}</span>
                        </a>
                      </MagneticButton>

                      {project.github && (
                        <MagneticButton ariaLabel={`View GitHub repository for ${project.title}`}>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-[#0A0F19] border border-[rgba(251,245,183,0.15)] text-[#F5F1E8] font-mono text-xs font-semibold uppercase tracking-[0.12em] hover:border-[#2FAF83] hover:text-[#2FAF83] transition-all cursor-pointer"
                          >
                            <GitHubIcon className="w-4 h-4" aria-hidden="true" />
                            <span>GitHub</span>
                          </a>
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
