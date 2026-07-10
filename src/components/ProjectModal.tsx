import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import { projects } from "../data/content";

type ProjectModalProps = {
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

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

export default function ProjectModal({
  index,
  onClose,
  onNavigate,
}: ProjectModalProps) {
  const total = projects.length;

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % total);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, onClose, onNavigate, total]);

  const project = index !== null ? projects[index] : null;

  return (
    <AnimatePresence>
      {project && index !== null && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative bg-surface border border-border rounded-lg max-w-3xl w-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-bg/70 text-text hover:text-accent transition-colors"
            >
              <X size={18} />
            </button>

            <img
              src={resolveImage(project.image)}
              alt={project.title}
              className="w-full max-h-[55vh] object-contain bg-bg"
            />

            <div className="p-6">
              <p className="font-mono text-xs text-accent-2">
                {index + 1} / {total}
              </p>
              <h3 className="font-display text-2xl font-semibold mt-1">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-text-faint mt-1">
                {project.stack}
              </p>
              <p className="text-text-muted mt-3">{project.description}</p>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-text-muted hover:text-accent transition-colors"
                >
                  <FaGithub size={16} /> Ver no GitHub
                </a>
              )}
            </div>

            <button
              onClick={() => onNavigate((index - 1 + total) % total)}
              aria-label="Projeto anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg/70 text-text hover:text-accent transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => onNavigate((index + 1) % total)}
              aria-label="Próximo projeto"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg/70 text-text hover:text-accent transition-colors"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
