import { useMemo } from "react";

interface ParticlesProps {
  count?: number;
  className?: string;
}

export const Particles = ({ count = 40, className = "" }: ParticlesProps) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 3,
        duration: 8 + Math.random() * 14,
        delay: Math.random() * 12,
        drift: `${(Math.random() - 0.5) * 120}px`,
        opacity: 0.3 + Math.random() * 0.6,
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ['--drift' as string]: p.drift,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};
