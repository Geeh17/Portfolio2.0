import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/content";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  mail: Mail,
  whatsapp: FaWhatsapp,
};

export default function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <SectionHeading title="" subtitle="Onde me encontrar" center />

        <Reveal className="flex justify-center gap-5 flex-wrap">
          {profile.socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <Icon size={22} />
              </a>
            );
          })}
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-text-muted mt-10">
            Se você quiser conversar, por favor entre em contato!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
