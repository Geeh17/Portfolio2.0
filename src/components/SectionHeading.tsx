import Reveal from "./Reveal";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  center = false,
}: SectionHeadingProps) {
  return (
    <Reveal className={`mb-14 md:mb-20 ${center ? "flex flex-col items-center" : ""}`}>
      <h2 className="font-display text-4xl md:text-5xl font-semibold text-text">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-text-muted mt-3 max-w-xl ${center ? "text-center" : ""}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
