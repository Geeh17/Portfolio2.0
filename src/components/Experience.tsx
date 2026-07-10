import { Building2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 md:py-32 bg-surface/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Experiência"
          subtitle="Trajetória profissional"
        />

        <div className="space-y-16">
          {experience.map((company) => (
            <Reveal key={company.company}>
              <div className="flex items-center gap-3 mb-6">
                <Building2 size={20} className="text-accent" />
                <h3 className="font-display text-2xl font-semibold">
                  {company.company}
                </h3>
                <span className="text-text-faint text-sm">
                  · {company.location}
                </span>
              </div>

              <div className="space-y-8 pl-4 border-l border-border ml-2.5">
                {company.roles.map((role) => (
                  <div key={role.title} className="relative pl-8">
                    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                    <h4 className="font-medium text-text">{role.title}</h4>
                    <p className="font-mono text-xs text-text-faint mt-1 mb-3">
                      {role.period}
                    </p>
                    <ul className="space-y-2">
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet.slice(0, 24)}
                          className="text-sm text-text-muted leading-relaxed"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
