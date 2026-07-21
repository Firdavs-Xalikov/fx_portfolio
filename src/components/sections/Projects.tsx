import { useState } from "react";
import { ExternalLink } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { useLanguage } from "../../context/LanguageContext";
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
    <div className="relative group overflow-hidden bg-slate-900/60 aspect-[16/9] max-h-[480px] w-full">
      {/* Skeleton loader placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-slate-800/60 animate-pulse flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
        </div>
      )}

      <picture>
        {project.imageWebp && <source srcSet={project.imageWebp} type="image/webp" />}
        <img
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.03] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </picture>

      {/* Bottom fade gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

      {/* Live badge overlaid on image */}
      <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">
          Live
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t, language } = useLanguage();

  const projects = t("projects_list") as ProjectItem[];

  return (
    <section id="projects" className="py-28 px-6 bg-black relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-2">
            {t("projects_tag")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            {t("projects_title")}
          </h2>
          <p className="text-slate-400 max-w-xl font-light text-sm md:text-base">
            {t("projects_subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <GlassCard
              key={`${language}-${idx}`}
              className="p-0 overflow-hidden"
              glowColor="rgba(59, 130, 246, 0.1)"
            >
              <ProjectImage project={project} />

              {/* Project Info */}
              <div className="p-8 md:p-10">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg text-[10px] font-medium tracking-wide bg-white/[0.03] border border-white/5 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-900/80">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live website for ${project.title}`}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium text-sm hover:bg-slate-200 transition-colors cursor-pointer"
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
                      className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-medium text-sm hover:border-slate-400 hover:text-white bg-white/5 transition-all cursor-pointer"
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
