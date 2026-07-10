import { ChevronUp } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <p className="text-sm text-text-faint">
          © {year} {profile.name}. Todos os direitos reservados.
        </p>
        <a
          href="#home"
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors"
        >
          <ChevronUp size={18} />
        </a>
      </div>
    </footer>
  );
}
