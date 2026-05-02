import { Reveal } from "./Reveal";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
  {
    name: "Presenting Partner",
    tone: "Gold",
    accent: "from-gold-bright via-gold to-gold-deep",
    border: "border-gold",
    items: ["Full-property naming rights", "Digital takeover (300+ screens)", "Anchor event integration", "Year-round flagship presence"],
    featured: true,
  },
  {
    name: "Category Sponsor",
    tone: "Silver",
    accent: "from-zinc-300 via-zinc-400 to-zinc-600",
    border: "border-zinc-500/60",
    items: ["Zone exclusivity", "Seasonal activations", "Digital presence package", "Co-branded marketing"],
  },
  {
    name: "Activation Partner",
    tone: "Bronze",
    accent: "from-amber-700 via-amber-800 to-amber-950",
    border: "border-amber-700/60",
    items: ["Pop-up zones (30–180 days)", "Experiential campaign support", "Social amplification", "Targeted demo access"],
  },
];

const demos = ["Avg HHI $75K+", "60% Female", "35% Tourists", "All Ages"];

export const Sponsorship = () => {
  return (
    <section id="sponsors" className="relative section-pad bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(43_53%_25%/0.15),transparent_70%)]" />

      <div className="container-deck relative">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="eyebrow mb-4">Sponsorship</p>
            <h2 className="heading-section">
              Your Brand.
              <br />
              <span className="gradient-gold-text">40 Million Impressions.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className={`relative h-full p-10 border ${t.border} bg-gradient-to-b from-surface/50 to-background transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_hsl(43_53%_40%/0.4)] ${
                  t.featured ? "md:scale-105" : ""
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-primary-foreground text-xs uppercase tracking-widest">
                    Flagship
                  </div>
                )}
                <div className={`h-1 w-16 bg-gradient-to-r ${t.accent} mb-8`} />
                <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2">{t.tone} Tier</p>
                <h3 className="font-display text-3xl mb-8">{t.name}</h3>
                <ul className="space-y-4">
                  {t.items.map((it, ii) => (
                    <li key={ii} className="flex items-start gap-3 text-foreground/75">
                      <Check className="text-gold flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm leading-relaxed">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 border-y border-gold/30 py-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-3">
            <span className="eyebrow">Visitor Demographics</span>
            {demos.map((d) => (
              <span key={d} className="font-display text-lg md:text-xl text-foreground/85">
                {d}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary-foreground font-medium tracking-wide glow-gold-hover hover:bg-gold-bright">
              Request Partnership Deck
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
