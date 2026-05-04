import { Reveal } from "./Reveal";
import { Gem, Plane, Crown } from "lucide-react";
import { PremiumVisual } from "./PremiumVisual";

const cards = [
  { icon: Gem, title: "Premium Footfall", desc: "Curated visitor base with elevated purchase intent and brand affinity." },
  { icon: Plane, title: "Tourism-Driven Spend", desc: "4 in 10 visitors are out-of-state — capturing destination retail dollars." },
  { icon: Crown, title: "Flagship Presence", desc: "Architectural prominence in our dedicated luxury corridor." },
];

export const Luxury = () => {
  return (
    <section id="luxury" className="relative section-pad bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(43_53%_25%/0.18),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 gold-rule opacity-40" />

      <div className="container-deck relative">
        <Reveal>
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">The Luxury Wing</p>
            <h2 className="heading-section">
              Where <span className="gradient-gold-text">Luxury</span>
              <br />Finds Its Audience
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 gold-rule" />

        <Reveal delay={0.15}>
          <p className="mt-12 max-w-3xl text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
            MOA's elevated retail corridor hosts premium and aspirational brands serving a high-intent, high-income
            visitor base. With 4 out of 10 visitors being out-of-state tourists, your flagship here reaches audiences
            no standalone store can match.
          </p>
        </Reveal>

        <div className="mt-12">
          <PremiumVisual
            icon={Crown}
            label="LUXURY WING"
            sublabel="Premium corridor · High-intent visitors"
            gradient="linear-gradient(135deg,#0A0A0A 0%,#1A0A2A 40%,#2A1020 100%)"
            height="320px"
          />
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="group relative p-10 border border-border hover:border-gold/60 transition-all duration-500 bg-gradient-to-b from-surface/40 to-transparent h-full">
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <c.icon className="text-gold mb-8" size={36} strokeWidth={1.2} />
                <h3 className="font-display text-2xl mb-4">{c.title}</h3>
                <div className="gold-rule mb-4 opacity-50" />
                <p className="text-foreground/60 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-rule opacity-40" />
    </section>
  );
};
