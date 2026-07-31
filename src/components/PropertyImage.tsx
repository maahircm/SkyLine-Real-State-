import type { PropertyType } from "@/lib/properties";

const PALETTES: Record<PropertyType, { sky: [string, string]; mass: string; accent: string }> = {
  Villa: { sky: ["#f4b579", "#e08a4f"], mass: "#0f2540", accent: "#2dd4bf" },
  Apartment: { sky: ["#8fb8d9", "#3f6a92"], mass: "#0b1f3a", accent: "#5ee2d1" },
  "Office Space": { sky: ["#a9bfd6", "#4c6d8f"], mass: "#0f2540", accent: "#16b8a6" },
  Land: { sky: ["#cfe3b0", "#9fbf7a"], mass: "#3d5a35", accent: "#0f9488" },
};

export default function PropertyImage({
  type,
  seed = 0,
  className,
}: {
  type: PropertyType;
  seed?: number;
  className?: string;
}) {
  const p = PALETTES[type];
  const towerCount = 5 + (seed % 3);

  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`sky-${type}-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.sky[0]} />
          <stop offset="100%" stopColor={p.sky[1]} />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#sky-${type}-${seed})`} />

      {type === "Land" ? (
        <>
          <rect y="150" width="400" height="110" fill={p.mass} opacity="0.85" />
          <path d="M0 150 L60 120 L120 155 L180 118 L240 150 L300 122 L360 152 L400 130 V260 H0 Z" fill={p.accent} opacity="0.25" />
        </>
      ) : (
        <>
          <rect y="190" width="400" height="70" fill={p.mass} opacity="0.5" />
          {Array.from({ length: towerCount }).map((_, i) => {
            const w = 28 + ((i * 13) % 20);
            const x = 20 + i * (360 / towerCount);
            const h = 60 + ((i * 37) % 110);
            const y = 200 - h;
            return <rect key={i} x={x} y={y} width={w} height={h + 60} fill={p.mass} rx="2" />;
          })}
          {Array.from({ length: towerCount * 3 }).map((_, i) => {
            const x = 30 + ((i * 47) % 340);
            const y = 60 + ((i * 29) % 130);
            return <rect key={i} x={x} y={y} width="5" height="7" fill={p.accent} opacity="0.6" />;
          })}
        </>
      )}

      <circle cx="340" cy="55" r="26" fill="#fff" opacity="0.35" />
    </svg>
  );
}
