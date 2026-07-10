import { motion } from "framer-motion";
import Terminal from "./Terminal";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 schema-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-mono text-accent text-sm tracking-widest mb-4">
            {profile.role}
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            {profile.name}
          </h1>
          <p className="text-text-muted text-lg md:text-xl mt-5 max-w-md">
            Acredito que, além do conhecimento técnico, persistência, disciplina
            e comprometimento são fatores determinantes para a construção de
            resultados consistentes e sustentáveis ao longo da minha carreira
            profissional.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#sobre-mim"
              className="px-6 py-3 rounded-md bg-accent text-bg font-medium hover:opacity-90 transition-opacity"
            >
              Sobre mim
            </a>
            <a
              href="#projetos"
              className="px-6 py-3 rounded-md border border-border text-text hover:border-accent transition-colors"
            >
              Ver projetos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex justify-center md:justify-end"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
