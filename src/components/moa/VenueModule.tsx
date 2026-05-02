import { Reveal } from "./Reveal";
import { Mic2, Building, Trees, Briefcase, ArrowRight, Download } from "lucide-react";

const venues = [
  {
    icon: Mic2,
    name: "Main Event Stage",
    capacity: "5,000 standing / 2,500 seated",
    sqft: "—",
    best: "Concerts · Broadcast",
    detail: "Full AV rig. Broadcast-ready. Green-room and hospitality access.",
  },
  {
    icon: Building,
    name: "Rotunda Plaza",
    capacity: "7,000+",
    sqft: "20,000",
    best: "Brand activations",
    detail: "360° branded environment with premium sightlines from all four levels.",
  },
  {
    icon: Trees,
    name: "Outdoor East Plaza",
    capacity: "15,000",
    sqft: "—",
    best: "Open-air activations",
    detail: "Seasonal outdoor activations adjacent to the property.",
  },
  {
    icon: Briefcase,
    name: "Private Event Suites",
    capacity: "10–500",
    sqft: "Varies",
    best: "Corporate · VIP",
    detail: "Fully catered private suites for corporate gatherings and VIP receptions.",
  },
];

export const VenueModule = () => {
  return (
    <section id="venue" className="relative section-pad bg-[#0D0D0D] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43_53%_20%/0.18),transparent_60%)]" />

      <div className="container-deck relative">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="eyebrow mb-4">Venue Infrastructure</p>
            <h2 className="heading-section">
              World-Class <span className="gradient-gold-text">Venue Infrastructure</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/70">
              Not just a mall. A multi-venue destination complex.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Venue capability cards */}
          <div className="space-y-4">
            {venues.map((v, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group p-6 border border-border hover:border-gold/50 bg-background/60 transition-all duration-500 hover:-translate-y-0.5">
                  <div className="flex items-start gap-5">
                    <v.icon className="text-gold flex-shrink-0 mt-1" size={28} strokeWidth={1.2} />
                    <div className="flex-1">
                      <h3 className="font-display text-xl mb-1 group-hover:text-gold transition-colors">{v.name}</h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-3">
                        Capacity: {v.capacity}
                      </p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{v.detail}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Specs table */}
          <Reveal delay={0.2}>
            <div className="border border-gold/30 bg-background/60">
              <div className="grid grid-cols-12 px-6 py-4 bg-gold/10 border-b border-gold/30 text-[11px] uppercase tracking-[0.2em] text-gold">
                <div className="col-span-5">Venue</div>
                <div className="col-span-3">Capacity</div>
                <div className="col-span-2">Sq Ft</div>
                <div className="col-span-2">Best For</div>
              </div>
              {venues.map((v, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 px-6 py-5 border-b border-border/60 last:border-0 text-sm hover:bg-surface/40 transition-colors"
                >
                  <div className="col-span-5 font-display text-base">{v.name}</div>
                  <div className="col-span-3 text-foreground/70">{v.capacity}</div>
                  <div className="col-span-2 text-foreground/70">{v.sqft}</div>
                  <div className="col-span-2 text-gold/80 text-xs">{v.best}</div>
                </div>
              ))}
              <div className="px-6 py-5 text-xs text-foreground/55 italic">
                All venues include full AV, dedicated event staff, and logistics support.
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-primary-foreground font-medium tracking-wide glow-gold-hover hover:bg-gold-bright">
              Book Your Venue
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/40 text-foreground hover:border-gold hover:text-gold transition-colors font-medium tracking-wide">
              <Download size={18} />
              Download Venue Kit
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
