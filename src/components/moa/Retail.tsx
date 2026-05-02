import { ArrowRight, Store, Sparkles, Layers } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  { icon: Store, title: "Flagship Retail", desc: "Multi-level anchor presence with prime visibility." },
  { icon: Sparkles, title: "Pop-Up Spaces", desc: "Short-term activations from 30 days." },
  { icon: Layers, title: "Mid-Tier Leasing", desc: "High-traffic corridors, flexible terms." },
];

export const Retail = () => {
  return (
    <section id="retail" className="relative section-pad bg-background overflow-hidden">
      <div className="container-deck">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <p className="eyebrow mb-4">Retail Opportunity</p>
              <h2 className="heading-section">
                The Country's Most Powerful <span className="gradient-gold-text">Retail Platform</span>
              </h2>
              <p className="mt-8 text-lg text-foreground/70 leading-relaxed">
                Over 520 brands across 4 levels. Nordstrom. Macy's. LEGO. Nike. 40 million annual shoppers who spend{" "}
                <span className="text-gold font-medium">52% more</span> than at any other mall nationwide.
              </p>

              <button className="group mt-10 inline-flex items-center gap-2 text-gold font-medium tracking-wide hover:gap-4 transition-all">
                Explore Leasing Options
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-surface to-background" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(43_53%_40%/0.3),transparent_70%)]" />
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-4 gap-px opacity-40">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="bg-background/30 flex items-center justify-center">
                    <Store className="text-gold/60" size={32} />
                  </div>
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div className="font-display text-4xl text-gold">520+</div>
                <div className="text-sm text-foreground/70 uppercase tracking-wider">Brands. One Roof.</div>
              </div>
              <div className="absolute top-0 left-0 w-px h-full bg-gold/40" />
              <div className="absolute top-0 right-0 w-px h-full bg-gold/40" />
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-px bg-border/40">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-background p-10 h-full group hover:bg-surface transition-all duration-500 border border-transparent hover:border-gold/40 relative">
                <f.icon className="text-gold mb-6" size={32} />
                <h3 className="font-display text-2xl mb-3">{f.title}</h3>
                <p className="text-foreground/60">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
