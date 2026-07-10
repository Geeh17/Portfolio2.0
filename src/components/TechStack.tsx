import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { techPrimary, techSecondary, type TechItem } from "../data/content";

function TechCard({ item, index }: { item: TechItem; index: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <div className="p-6 rounded-lg border border-border bg-surface hover:border-accent/50 transition-colors h-full">
        <span
          className="iconify text-4xl mb-4 inline-block"
          data-icon={item.iconify}
          style={{ color: item.color }}
        />
        <h3 className="font-display text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-text-muted mt-2 leading-relaxed">
          {item.description}
        </p>
      </div>
    </Reveal>
  );
}

export default function TechStack() {
  return (
    <section id="tecnologias" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Tecnologias" subtitle="Stack principal" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techPrimary.map((item, i) => (
            <TechCard key={item.name} item={item} index={i} />
          ))}
        </div>

        <div className="mt-20 mb-10 flex items-center gap-4">
          <p className="font-mono text-sm text-text-faint whitespace-nowrap">
            stack secundária
          </p>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {techSecondary.map((item, i) => (
            <TechCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
