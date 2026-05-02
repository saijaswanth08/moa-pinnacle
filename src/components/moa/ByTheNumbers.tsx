import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

const stats = [
  { value: 40, suffix: "M+", label: "Annual Visitors" },
  { value: 5.6, suffix: "M", decimals: 1, label: "Square Feet" },
  { value: 520, suffix: "+", label: "Stores & Brands" },
  { value: 2, prefix: "$", suffix: "B+", label: "Annual Economic Impact" },
  { value: 4, prefix: "#", label: "Most Visited US Attraction" },
  { value: 1.5, suffix: "mi", decimals: 1, label: "From MSP Airport" },
];

const timeline = [
  { year: "1992", label: "Grand Opening" },
  { year: "2000s", label: "Major Expansion" },
  { year: "2015", label: "Renovation" },
  { year: "2024", label: "New Attractions" },
];

export const ByTheNumbers = () => {
  return (
    <section id="numbers" className="relative section-pad bg-gradient-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43_53%_20%/0.15),transparent_60%)]" />

      <div className="container-deck relative">
        <Reveal>
          <div className="text-center mb-20">
            <p className="eyebrow mb-4">By The Numbers</p>
            <h2 className="heading-section">
              Why <span className="gradient-gold-text">This Property</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-background p-10 md:p-12 h-full group hover:bg-surface transition-colors duration-500 relative">
                <div className="absolute top-0 left-0 w-12 h-px bg-gold opacity-60 group-hover:w-full transition-all duration-700" />
                <div className="font-display text-6xl md:text-7xl font-bold gradient-gold-text">
                  <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="mt-4 text-sm uppercase tracking-[0.2em] text-foreground/60">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Timeline */}
        <Reveal delay={0.2}>
          <div className="mt-24">
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 gold-rule" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
                {timeline.map((t, i) => (
                  <div key={i} className="text-center">
                    <div className="w-3 h-3 mx-auto mb-6 rounded-full bg-gold glow-gold" />
                    <div className="font-display text-3xl text-gold">{t.year}</div>
                    <div className="text-sm text-foreground/60 mt-1">{t.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-20 text-center font-display italic text-2xl md:text-3xl text-foreground/80">
            Bigger than Vatican City. <span className="text-gold">Closer than you think.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};
