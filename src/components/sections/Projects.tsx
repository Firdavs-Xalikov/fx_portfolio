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
    <div className="relative group overflow-hidden bg-[#050505] border-b border-white/10 aspect-[16/9] max-h-[480px] w-full">
      {!loaded && (
        <div className="absolute inset-0 bg-[#08111F]/80 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
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
    </div>
  );
}

export default function Projects() {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" });

  const projects = t("projects_list") as ProjectItem[];

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
    <section id="projects" className="py-32 md:py-44 px-8 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-20"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium block mb-3">
            {t("projects_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[#F5F5F7] tracking-tight mb-4">
            {t("projects_title")}
          </h2>
          <p className="text-zinc-400 max-w-xl font-light text-base">
            {t("projects_subtitle")}
          </p>
        </motion.div>

        {/* Projects Container */}
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

                  <div className="p-8 md:p-12">
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-[#F5F5F7] tracking-tight mb-4">
                      {project.title}
                    </h3>

                    <p className="text-base text-zinc-400 font-light leading-relaxed mb-8 max-w-3xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-sans text-xs border border-white/10 bg-[#08111F]/60 text-zinc-300 px-3.5 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <MagneticButton ariaLabel={`Visit live website for ${project.title}`}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-[#F5F5F7] text-[#050505] font-sans text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-white transition-colors cursor-pointer"
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
                            className="flex items-center gap-2 px-6 py-3 bg-[#08111F]/80 border border-white/10 text-white font-sans text-xs font-medium uppercase tracking-wider rounded-full hover:border-white/30 transition-all cursor-pointer"
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
