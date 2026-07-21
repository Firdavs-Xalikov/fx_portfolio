import { useState } from "react";
import { ExternalLink } from "lucide-react";
import GlassCard from "../ui/GlassCard";
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
    <div className="relative group overflow-hidden bg-[#05070C] border-b border-[#1B2130] aspect-[16/9] max-h-[480px] w-full">
      {/* Skeleton loader placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-[#0B0F18]/60 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#2E8B74]/20 border-t-[#2E8B74] animate-spin" />
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
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-[#05070C]/90 border border-[#1B2130] z-10">
        <span className="w-2 h-2 rounded-full bg-[#2E8B74] animate-pulse" />
        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#2E8B74]">
          LIVE PRODUCTION
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t, language } = useLanguage();

  const projects = t("projects_list") as ProjectItem[];

  return (
    <section id="projects" className="py-28 md:py-36 px-6 bg-[#05070C] border-b border-[#1B2130]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#2E8B74] font-bold block mb-3">
            {t("projects_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EDEDE7] tracking-tight mb-4">
            {t("projects_title")}
          </h2>
          <p className="text-[#8B92A0] max-w-xl font-normal text-base">
            {t("projects_subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <GlassCard
              key={`${language}-${idx}`}
              className="p-0 overflow-hidden"
            >
              <ProjectImage project={project} />

              {/* Project Info */}
              <div className="p-8 md:p-10">
                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#EDEDE7] tracking-tight mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base text-[#8B92A0] font-normal leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Mono Tech Tag Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-xs border border-[#1B2130] bg-[#05070C] text-[#8B92A0] px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#1B2130]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live website for ${project.title}`}
                    className="flex items-center gap-2 px-6 py-3 bg-[#2E8B74] text-[#EDEDE7] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#1B2130] transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span>{t("projects_visit")}</span>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View GitHub repository for ${project.title}`}
                      className="flex items-center gap-2 px-6 py-3 bg-[#0B0F18] border border-[#1B2130] text-[#EDEDE7] font-mono text-xs font-semibold uppercase tracking-wider hover:border-[#2E8B74] hover:text-[#2E8B74] transition-all cursor-pointer"
                    >
                      <GitHubIcon className="w-4 h-4" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
