import { FileText, GraduationCap, Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about, profile } from "../data/content";
import photo from "../assets/images/430.jpg";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-sm text-accent-2 mb-3">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm text-text-muted pl-4 border-l border-border"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section id="sobre-mim" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Sobre mim" />

        <div className="grid md:grid-cols-[1fr_320px] gap-16">
          <div>
            <Reveal>
              <div className="space-y-5 text-text-muted leading-relaxed">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} className="text-accent" />
                <h3 className="font-display text-xl font-semibold">
                  Formação acadêmica
                </h3>
              </div>
              <ul className="space-y-2">
                {about.education.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-text-muted pl-4 border-l border-border"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-accent" />
                <h3 className="font-display text-xl font-semibold">
                  Certificações
                </h3>
              </div>
              <ul className="space-y-2">
                {about.certifications.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-text-muted pl-4 border-l border-border"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2} className="mt-12">
              <h3 className="font-display text-xl font-semibold mb-6">
                Principais competências
              </h3>
              <div className="grid sm:grid-cols-3 gap-8">
                <SkillGroup title="Back-end" items={about.skills.backend} />
                <SkillGroup
                  title="Banco de dados"
                  items={about.skills.database}
                />
                <SkillGroup title="Front-end" items={about.skills.frontend} />
              </div>
            </Reveal>

            <Reveal delay={0.25} className="mt-12">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-bg font-medium hover:opacity-90 transition-opacity"
              >
                Confira o meu currículo
                <FileText size={18} />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="sticky top-24">
              <div className="rounded-lg border border-border overflow-hidden bg-surface">
                <img
                  src={photo}
                  alt={profile.name}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
