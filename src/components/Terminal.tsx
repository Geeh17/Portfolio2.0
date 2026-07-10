import { useEffect, useState } from "react";

type Line = { command: string; output: string };

const lines: Line[] = [
  { command: "ls stack/", output: "C# · .NET · SQL Server · React · Node.js" },
  { command: "git log --oneline -1", output: "Fascinado em tecnologia" },
  {
    command: "cat hobbies.txt",
    output: "Café, jogos e código nas horas vagas",
  },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "output" | "done">("typing");

  useEffect(() => {
    if (visibleLines >= lines.length) {
      setPhase("done");
      return;
    }
    const current = lines[visibleLines].command;

    if (phase === "typing") {
      if (typed.length < current.length) {
        const t = setTimeout(
          () => setTyped(current.slice(0, typed.length + 1)),
          45,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("output"), 250);
      return () => clearTimeout(t);
    }

    if (phase === "output") {
      const t = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setTyped("");
        setPhase("typing");
      }, 550);
      return () => clearTimeout(t);
    }
  }, [typed, phase, visibleLines]);

  return (
    <div className="w-full max-w-xl rounded-lg border border-border bg-surface/80 backdrop-blur-sm shadow-2xl shadow-black/30 overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-alt">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-text-faint text-xs">portfolio.sh</span>
      </div>
      <div className="p-5 min-h-[200px] flex flex-col gap-3">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i}>
            <p className="text-text-muted">
              <span className="text-accent-2">$</span> {line.command}
            </p>
            <p className="text-text pl-4">{line.output}</p>
          </div>
        ))}
        {phase !== "done" && (
          <p className="text-text-muted">
            <span className="text-accent-2">$</span> {typed}
            <span className="inline-block w-[7px] h-[14px] bg-accent ml-0.5 align-middle animate-pulse" />
          </p>
        )}
        {phase === "done" && (
          <p className="text-text-muted">
            <span className="text-accent-2">$</span>
            <span className="inline-block w-[7px] h-[14px] bg-accent ml-1.5 align-middle animate-pulse" />
          </p>
        )}
      </div>
    </div>
  );
}
