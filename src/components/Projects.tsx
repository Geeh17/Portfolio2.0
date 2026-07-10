import { useState } from "react";
import { Search } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/content";

const images = import.meta.glob("../assets/images/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function resolveImage(file: string) {
  const entry = Object.entries(images).find(([path]) =>
    path.endsWith(`/${file}`)
  );
  return entry?.[1] ?? "";
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-24 md:py-32 bg-surface/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Projetos"
          subtitle="Confira os meus projetos"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.05}>
              <div className="group relative rounded-lg overflow-hidden border border-border bg-surface">
                <img
                  src={resolveImage(project.image)}
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/85 transition-colors duration-300 flex flex-col justify-end p-5">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <h3 className="font-display font-semibold text-text">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-accent mt-1">
                      {project.stack}
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Ver detalhes de ${project.title}`}
                        className="p-2 rounded-full bg-surface-alt text-text hover:text-accent transition-colors"
                      >
                        <Search size={16} />
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Ver ${project.title} no GitHub`}
                          className="p-2 rounded-full bg-surface-alt text-text hover:text-accent transition-colors"
                        >
                          <FaGithub size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
