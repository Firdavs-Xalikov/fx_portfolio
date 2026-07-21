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
    <div className="relative group overflow-hidden bg-[#0A2027] border-b border-[#1C3B42] aspect-[16/9] max-h-[480px] w-full">
      {/* Skeleton loader placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-[#0F2830]/60 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#00C2D1]/20 border-t-[#00C2D1] animate-spin" />
        </div>
      )}

      <picture>
        {project.imageWebp && <source srcSet={project.imageWebp} type="image/webp" />}
        <img
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </picture>

      {/* Minimal Live badge overlaid on image */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-[#0A2027]/90 border border-[#1C3B42] z-10">
        <span className="w-2 h-2 rounded-full bg-[#00C2D1] animate-pulse" />
        <span className="font-digital text-[10px] uppercase font-bold tracking-[0.12em] text-[#00C2D1]">
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
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-28 md:py-36 px-6 border-b border-[#1C3B42]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-20"
        >
          <span className="font-digital text-xs uppercase tracking-[0.12em] text-[#00C2D1] font-bold block mb-3">
            {t("projects_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EAF6F6] tracking-tight mb-4">
            {t("projects_title")}
          </h2>
          <p className="text-[#6B8F94] max-w-xl font-normal text-base">
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
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-[#EAF6F6] tracking-tight mb-4">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-[#6B8F94] font-normal leading-relaxed mb-6 max-w-3xl">
                      {project.description}
                    </p>

                    {/* Digital Tech Tag Chips */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tIdx) => (
                        <motion.span
                          key={tIdx}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  y: -2,
                                  borderColor: "#00C2D1",
                                  backgroundColor: "#0A2027",
                                }
                          }
                          transition={{ duration: 0.15 }}
                          className="font-digital text-xs border border-[#1C3B42] bg-[#0A2027] text-[#6B8F94] px-2.5 py-1 tracking-[0.06em] cursor-default transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons with Magnetic Pull */}
                    <div className="flex items-center gap-4 pt-6 border-t border-[#1C3B42]">
                      <MagneticButton ariaLabel={`Visit live website for ${project.title}`}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-[#00C2D1] text-[#0A2027] font-digital text-xs font-bold uppercase tracking-[0.12em] hover:bg-[#EAF6F6] transition-colors cursor-pointer glow-chlorine"
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
                            className="flex items-center gap-2 px-6 py-3 bg-[#0F2830] border border-[#1C3B42] text-[#EAF6F6] font-digital text-xs font-bold uppercase tracking-[0.12em] hover:border-[#00C2D1] hover:text-[#00C2D1] transition-all cursor-pointer"
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
