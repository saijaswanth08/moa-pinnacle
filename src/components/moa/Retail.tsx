import { ArrowRight, Store, Sparkles, Layers } from "lucide-react";
import { Reveal } from "./Reveal";
import { CinematicVisual } from "./CinematicVisual";

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

              <button 
                onClick={() => document.getElementById("leasing")?.scrollIntoView({ behavior: "smooth" })}
                className="group mt-10 inline-flex items-center gap-2 text-gold font-medium tracking-wide hover:gap-4 transition-all"
              >
                Explore Leasing Options
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <CinematicVisual
              src="/images/retail-corridor.png"
              alt="Premium retail corridors at Mall of America"
              label="RETAIL FLOOR"
              sublabel="520+ stores · 4 levels"
              height="500px"
            />
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
