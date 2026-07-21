import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ExternalLink, Box } from "lucide-react";
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
    <div className="relative group overflow-hidden bg-[#050505] border-b border-[#00F0FF]/30 aspect-[16/9] max-h-[480px] w-full">
      {!loaded && (
        <div className="absolute inset-0 bg-[#0A0D14]/80 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#00F0FF]/20 border-t-[#00F0FF] animate-spin" />
        </div>
      )}

      <picture>
        {project.imageWebp && <source srcSet={project.imageWebp} type="image/webp" />}
        <img
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </picture>

      {/* Holographic Badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-[#050505]/90 border border-[#00F0FF]/40 z-10 glow-blue">
        <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#00F0FF]">
          HOLOGRAPHIC PROJECTION // LIVE
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-28 md:py-36 px-6 border-b border-[#00F0FF]/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#00F0FF] font-bold block mb-3">
            // HOLOGRAPHIC CUBE REPOSITORIES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            FEATURED CYBER PROJECTS
          </h2>
          <p className="text-[#6B8F94] max-w-xl font-normal text-base">
            Engineered web applications, scalable SaaS architectures, and interactive digital interfaces.
          </p>
        </motion.div>

        {/* Projects Grid */}
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
                <GlassCard className="p-0 overflow-hidden border-[#00F0FF]/30 hover:border-[#9D00FF]">
                  <ProjectImage project={project} />

                  {/* Project Info */}
                  <div className="p-8 md:p-10">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 flex items-center gap-3">
                      <Box className="w-6 h-6 text-[#00F0FF]" />
                      <span>{project.title}</span>
                    </h3>

                    <p className="text-base text-[#6B8F94] font-normal leading-relaxed mb-6 max-w-3xl">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tIdx) => (
                        <motion.span
                          key={tIdx}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  y: -2,
                                  borderColor: "#00F0FF",
                                  backgroundColor: "#050505",
                                }
                          }
                          transition={{ duration: 0.15 }}
                          className="font-mono text-xs border border-[#00F0FF]/30 bg-[#050505] text-[#00F0FF] px-2.5 py-1 tracking-wider cursor-default transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-6 border-t border-[#00F0FF]/20">
                      <MagneticButton ariaLabel={`Visit live website for ${project.title}`}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-[#00F0FF] text-[#050505] font-display text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer glow-blue"
                        >
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                          <span>LAUNCH DEMO</span>
                        </a>
                      </MagneticButton>

                      {project.github && (
                        <MagneticButton ariaLabel={`View GitHub repository for ${project.title}`}>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-[#0A0D14] border border-[#00F0FF]/40 text-white font-display text-xs font-bold uppercase tracking-wider hover:border-[#9D00FF] hover:text-[#9D00FF] transition-all cursor-pointer"
                          >
                            <GitHubIcon className="w-4 h-4" aria-hidden="true" />
                            <span>SOURCE CODE</span>
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
