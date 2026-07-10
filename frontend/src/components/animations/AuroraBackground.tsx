type Tone = "blue" | "violet" | "coral" | "warm";

const tones: Record<Tone, [string, string, string]> = {
  blue: ["#3282EB", "#7C3AED", "#122E52"],
  violet: ["#7C3AED", "#FB7185", "#3282EB"],
  coral: ["#FB7185", "#F59E0B", "#7C3AED"],
  warm: ["#F59E0B", "#FB7185", "#3282EB"],
};

interface AuroraBackgroundProps {
  tone?: Tone;
  className?: string;
}

export function AuroraBackground({ tone = "blue", className = "" }: AuroraBackgroundProps) {
  const [a, b, c] = tones[tone];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="animate-blob-a absolute -top-1/4 -left-1/4 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl"
        style={{ background: `radial-gradient(circle, ${a}, transparent 70%)` }}
      />
      <div
        className="animate-blob-b absolute -bottom-1/4 -right-1/4 h-[40rem] w-[40rem] rounded-full opacity-25 blur-3xl"
        style={{ background: `radial-gradient(circle, ${b}, transparent 70%)` }}
      />
      <div
        className="animate-blob-c absolute top-1/3 right-1/4 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle, ${c}, transparent 70%)` }}
      />
    </div>
  );
}
