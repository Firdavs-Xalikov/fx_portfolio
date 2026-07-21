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
    <div className="relative group overflow-hidden bg-[#FAFAF7] border-b border-[#E4E3DF] aspect-[16/9] max-h-[480px] w-full">
      {/* Skeleton loader placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-[#E4E3DF]/40 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#1F4E79]/20 border-t-[#1F4E79] animate-spin" />
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
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-white border border-[#E4E3DF] z-10">
        <span className="w-2 h-2 rounded-full bg-[#1F4E79] animate-pulse" />
        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#1F4E79]">
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
    <section id="projects" className="py-28 md:py-36 px-6 bg-[#FAFAF7] border-b border-[#E4E3DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1F4E79] font-bold block mb-3">
            {t("projects_tag")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#14151A] tracking-tight mb-4">
            {t("projects_title")}
          </h2>
          <p className="text-[#6B6B70] max-w-xl font-normal text-base">
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
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#14151A] tracking-tight mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base text-[#6B6B70] font-normal leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Mono Tech Tag Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-xs border border-[#E4E3DF] bg-[#FAFAF7] text-[#6B6B70] px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#E4E3DF]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live website for ${project.title}`}
                    className="flex items-center gap-2 px-6 py-3 bg-[#1F4E79] text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#14151A] transition-colors cursor-pointer"
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
                      className="flex items-center gap-2 px-6 py-3 bg-white border border-[#E4E3DF] text-[#14151A] font-mono text-xs font-semibold uppercase tracking-wider hover:border-[#1F4E79] hover:text-[#1F4E79] transition-all cursor-pointer"
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
